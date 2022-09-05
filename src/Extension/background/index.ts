import { IStorage } from "../Content"

const TrackerConsole = () => {
    document.images[0].remove()
    const body = document.body
    body.className = 'Body'
    const div = document.createElement('div')
    div.className = 'Console Container'
    const code = document.createElement('code')
    code.className = 'Console Log'
    const label = document.createElement('label')
    label.className = 'Console Status'
    const ImageTrackerLogo = document.createElement('img')
    ImageTrackerLogo.className = 'Image Tracker Logo'
    ImageTrackerLogo.src = 'img/logo.png'
    const TargetLogo = document.createElement('img')
    TargetLogo.className = 'Target Logo'
    const TargetImage = document.createElement('img')
    TargetImage.className = 'Target Image'

    const InjectDom = (Target : HTMLElement, Array : HTMLElement[]) => {
        Array
            .forEach(el => Target.append(el))
    }

    InjectDom(div, [
        code,
        label,
        ImageTrackerLogo,
        TargetLogo,
        TargetImage
    ])

    InjectDom(body, [div])
}


let db : IDBDatabase
const dbName = 'Image_Tracker_DB'
const Images = 'Images'

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
    const transaction = db.transaction([Images], 'readwrite')
    const imageStore = transaction.objectStore(Images)

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
            const imageStore = db.createObjectStore(Images, { keyPath : 'id' })
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

chrome.runtime.onInstalled.addListener(async () => {
    console.info('[ Image Tracker Install ]')
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
        const TapLink = message.Href.split('/')[2]
        const SearchUrl =  message.Href.replace('?', '=').replace('&', '=').split('=')
        const googleToken = SearchUrl[2]
        const patreonToken = SearchUrl[4] ?? ''
        if (TapLink === 'image-tracker.taplink.ws') {
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