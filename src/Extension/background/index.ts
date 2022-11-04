import { IStorage } from "../Content"

let db : IDBDatabase
const dbName = 'Image_Tracker_DB'
const TableName = 'Images'

const error = async (error : string) => {
    throw new Error(error)
}

const isHtml = (base64 : string) => {
    return base64?.replace(';', '/').split('/').includes('html')
}

const NewStorage = async (image : IStorage) => {
    const res = await fetch(image.base64 as string).catch(async (e) => {
        await error(`res : ${e}`)
        return null
    })
    const Blob = await res?.blob()
    return {
        ...image,
        ['base64'] : null,
        ['blob'] : Blob
    }
}

const addData = (image ?: IStorage) => {
    const transaction = db.transaction([TableName], 'readwrite')
    const imageStore = transaction.objectStore(TableName)

    imageStore.add(image)

    transaction.onerror = async (e : any) => {
        error(`Error: ${e.target.error}`)
    }
    transaction.onabort = async (e : any) => {
        error(`[ Transaction was aborted ] : ${e.target.error}`,)
    }
    transaction.oncomplete = () => {
        console.info('[ Transaction complete ]')
    }
}

const CreateStorage = async (image ?: IStorage) => {
    if (indexedDB) {
        const request = indexedDB.open(dbName, 10) 
        request.onerror = async (e : any) => {
            error(`Why didn't you allow Image Tracker to use IndexedDB?! Database error message : ${e.target.error}`)
        }
        request.onupgradeneeded = () => {
            const db = request.result
            const uniqueFalse = { unique : false }
            const imageStore = db.createObjectStore(TableName, { keyPath : 'id' })
            imageStore.createIndex('origin', 'origin', uniqueFalse)
            imageStore.createIndex('alt', 'alt', uniqueFalse)
            imageStore.createIndex('size', 'size', uniqueFalse)
            imageStore.createIndex('extension', 'extension', uniqueFalse)
        }
        request.onsuccess = (e : any) => {
            const database = e.target.result
            db = database
            if (image) {
                addData(image)
            }
        }
    } else {
        error("Your browser doesn't support a stable version of IndexedDB and Image Tracker. Such and such feature will not be available.")
    }
}

const WindowPopup = async (url : string) => {
    return await chrome.windows.create({
        url : url,
        width: 700,
        height: 700,
        left : 1000,
        top : 0,
        type : 'popup',
        focused : true
    })
}

chrome.runtime.onInstalled.addListener(async () => {
    console.info('[ Image Tracker Install ]')
    
    chrome.storage.sync.get(null, async ({ notifications }) => {
        if (!notifications) {
            const isChrome = navigator.userAgent.indexOf('Chrome') !== -1
            if (isChrome) {
                chrome.notifications.create({
                    message : `we have detected an error that may cause problems with our extension in google chrome, please follow the steps.`,
                    title : 'Image Tracker was detected error',
                    type : 'image',
                    iconUrl : '/image-tracker-logo-orichalcum-09-10-2022.png',
                    imageUrl : 'https://imagetracker.org/media/desktop/scroll-smooth-error-google-chrome-09-17-2022.webp',
                    buttons : [
                        {
                            title : 'Go to steps'
                        },
                        {
                            title : 'Maybe later'
                        }
                    ],
                    isClickable : true,
                    requireInteraction : true
               }, (myNotificationID) => {
                    chrome.notifications.onButtonClicked.addListener(async (notifId, btnIdx) => {
                        if (notifId === myNotificationID) {
                            if (btnIdx === 0) {
                                await chrome.tabs.create({
                                    url : 'chrome://flags/#smooth-scrolling'
                                })
                                await chrome.tabs.create({
                                    url : 'https://imagetracker.org/support'
                                })
                            } else {}
                        }
                    });
               })
            } else {
                chrome.notifications.create({
                    message : `Welcome to the best image downloader, don't forget to check our goals to make an even more interesting project for you 💜.`,
                    title : 'Image Tracker was successfully installed',
                    type : 'basic',
                    iconUrl : '/image-tracker-logo-orichalcum-09-10-2022.png',
                    buttons : [
                        {
                            title : 'Check goals'
                        },
                        {
                            title : 'Maybe later'
                        }
                    ],
                    isClickable : true,
                    requireInteraction : true
               }, (myNotificationID) => {
                    chrome.notifications.onButtonClicked.addListener(async (notifId, btnIdx) => {
                        if (notifId === myNotificationID) {
                            if (btnIdx === 0) {
                                await chrome.tabs.create({
                                    url : 'https://imagetracker.org/about'
                                })
                            } else {}
                        }
                    });
               })
            }
        }
    })
    
    await chrome.storage.sync.set({ notifications : true }) 
})

chrome.action.onClicked.addListener(async () => { 
    const tabs = await chrome.tabs.query({ 
        url : chrome.runtime.getURL('/popup.html') 
    })
    const extensionIsOpen = tabs[0]
    
    if (!!extensionIsOpen) {
        console.log(extensionIsOpen)
        chrome.notifications.create({
            message : 'There is already an extension window open, do you want to open another one?',
            title : 'Image Tracker',
            type : 'basic',
            iconUrl : '/image-tracker-logo-orichalcum-09-10-2022.png',
            buttons : [
                {
                    title : 'Yes'
                },
                {
                    title : 'No'
                }
            ],
            requireInteraction : true,
            isClickable : true,
       }, (myNotificationID) => {
            chrome.notifications.onButtonClicked.addListener(async (notifId, btnIdx) => {
                if (notifId === myNotificationID) {
                    if (btnIdx === 0) {
                        await WindowPopup(
                            chrome.runtime.getURL('/popup.html')
                        )
                    } else {}
                }
            });
       })
    } else {
        await WindowPopup(
            chrome.runtime.getURL('/popup.html')
        )
    } 
})

chrome.runtime.onMessage.addListener( async (message : { 
    host : { 
        href : string
    }, 
    Image : IStorage 
}) => {
    if (message.Image) {
        const Image = message.Image
        if (isHtml(Image.base64 as string)) return
        const newImage = await NewStorage(Image)
        CreateStorage(newImage)
    }

    if (!!message.host?.href) {
        const ImageTrackerUrl = new URL(message.host.href)
        const params = new URLSearchParams(ImageTrackerUrl.search)
        const token = params.get('token')
        if (token) {
            await chrome.storage.sync.remove(['token']).catch((e) => {
                error(`chrome storage sync clear error ${e}`)
            })
            await chrome.storage.sync.set({ token }).catch((e) => {
                error(`chrome storage sync set error ${e}`)
            })

            await chrome.windows.remove(chrome.windows.WINDOW_ID_CURRENT)

            await WindowPopup(
                chrome.runtime.getURL('/popup.html')
            )
        }
    }
})