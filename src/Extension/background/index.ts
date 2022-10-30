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
    })
}

chrome.runtime.onInstalled.addListener(async () => {
    console.info('[ Image Tracker Install ]')
    const isChrome = navigator.userAgent.indexOf('Chrome') !== -1
    await chrome.tabs.create({
        url : 'https://imagetracker.org'
    })
    if (isChrome) {
        await chrome.tabs.create({
            url : 'chrome://flags/#smooth-scrolling'
        })
        const Window = await WindowPopup('https://imagetracker.org/media/desktop/scroll-smooth-error-google-chrome-09-17-2022.webp')
        await chrome.scripting.executeScript({
            target : {
                tabId : Window.tabs[0].id
            },
            func : () => {
               const body = document.body
               const div = document.createElement('div')
               const title = document.createElement('h1')
               const describe = document.createElement('p')
               div.style.padding = '15px'
               div.style.margin = '10px 0px'
               div.style.background = '#181818'
               div.style.fontFamily = 'sans-serif'
               div.style.width = '100%'
               div.style.textAlign = 'center'
               div.style.borderRadius = '8px'
               title.style.margin = '5px'
               title.style.padding = '5px'
               title.innerText = 'Google chrome browser detected error'
               title.style.color = '#f55'
               describe.style.color = '#fff'
               describe.style.fontSize = '1.3rem'
               describe.innerHTML = 'The extension has a functionality that requires you to enable <strong>Smooth Scrolling</strong>, follow the steps shown below.'
               div.append(title)
               div.append(describe)
               body.prepend(div)
            }
        })
    }
})

chrome.action.onClicked.addListener(async () => { 
    //const PopupWindows = await chrome.windows.getAll({ windowTypes : ['popup']})
    //const PopupId = PopupWindows[PopupWindows.length - 1].id
    await WindowPopup(
        chrome.runtime.getURL('/popup.html')
    )
})

chrome.runtime.onMessage.addListener( async (message : { Href : string, Image : IStorage }) => {
    if (message.Image) {
        const Image = message.Image
        if (isHtml(Image.base64 as string)) return
        const newImage = await NewStorage(Image)
        CreateStorage(newImage)
    }

    if (message.Href) {
        console.log(message.Href)
        const ImageTracker = message.Href.split('/')[2]
        const SearchUrl =  message.Href.replace('?', '=').replace('&', '=').split('=')
        const googleToken = SearchUrl[2]
        const patreonToken = SearchUrl[4] ?? ''
        if (ImageTracker === 'imagetracker.org' && !!googleToken) {
            const res = await fetch('https://api.imagetracker.org/member/auth', {
                method : 'POST',
                headers : {
                    "Authorization" : googleToken
                },
                body : JSON.stringify({ patreonToken }),
                mode : 'cors'
            })
            const { token } = await res.json()

            await chrome.storage.sync.remove(['token']).catch((e) => {
                error(`chrome storage sync clear error ${e}`)
            })
            await chrome.storage.sync.set({ token }).catch((e) => {
                error(`chrome storage sync set error ${e}`)
            })
            if (chrome.runtime.id) {
                chrome.runtime.reload()
            }
        }
    }
})