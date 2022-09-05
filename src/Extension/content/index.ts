type Extension = [
    'jpg', 
    'gif', 
    'png', 
    'webp', 
    'jpeg',
    'svg'
][number]

type Attempts = [
    1,
    2
][number]

export interface IStorage {
    id : string
    origin : string
    base64 : string | ArrayBuffer | null
    blob ?: Blob
    alt : string
    size : [number, number]
    extension : Extension
    src : string
}

const GetExtension = (src : string) => {
    const ArraySrc = src.replaceAll('.', '/').replaceAll('?', '/').split('/')
    const Exist = (extensions : Extension[]) : Extension => {
        const ext = extensions.filter(ext => ArraySrc.includes(ext)).toString() as Extension
        if (ext === 'jpeg') {
            return 'jpg'
        } else {
            return ext
        }
    }
    return Exist([
        'jpg',
        'gif',
        'jpeg',
        'png',
        'svg',
        'webp'
    ])
}

const Attempt = {
    async 1(image : HTMLImageElement) {
        const res = await fetch(image.src, {
            method : 'GET',
            headers : {
                'Access-Control-Allow-Origin':'*'
            },
            mode : 'cors',
            cache : 'default'
        })

        return res
    },
    async 2(image : HTMLImageElement) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(image, 0, 0)
        const base64 = canvas.toDataURL().split(';base64,')[1]
        const res = await fetch(base64)

        return res
    },
    async 3(image : HTMLImageElement) {
       //window.open(image.src, 'console', 'location=1, toolbar=1, menubar=1, resizable=1, width=464, height=700')
    }
}

const Fetch = async (image : HTMLImageElement) => {
    const LastAttempt = parseInt(Object.keys(Attempt).pop() as string)

    for (let currentAttempt = 1; LastAttempt >= currentAttempt; currentAttempt++) {
        const res = await Attempt[currentAttempt as Attempts](image)
            .catch(async (e) => {
                console[currentAttempt >= LastAttempt ? 'error' : 'warn'](`currentAttempt : ${currentAttempt} error : ${e}`)
            })
        if (res) {
            currentAttempt = LastAttempt
            return res
        }
    }
}

const blobToBase64 = (blob : Blob) : Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, _) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(blob)
    })
}

const CreateStorageObj = async (image : HTMLImageElement) : Promise<IStorage> => {
    const { src, naturalHeight, naturalWidth, "alt" : Alt } = image
    const res = await Fetch(image)
    const blob = await res?.blob()
    const maxChar = 1000000000000000
    const extension = !!GetExtension(src) ? GetExtension(src) : 'png'
    const alt = !!Alt ? Alt : 'image'
    const base64 = blob ? await blobToBase64(blob) : null
    const origin = window.location.hostname

    return {
        id : Math.floor((Math.random() * maxChar) + maxChar).toString(),
        origin,
        alt,
        size : [
            naturalWidth, 
            naturalHeight
        ],
        base64,
        extension,
        src
    }
}

const Data = () => {
    const Images = Array.from(document.images) as Array<HTMLImageElement>
    const QueryImageData = Images
        .filter(({ naturalWidth, naturalHeight, dataset : { imageStatus } }) => {
            return  naturalWidth * naturalHeight >= 10000 && imageStatus !== '🎯'
        })

    QueryImageData
        .forEach((image) => {
            const { dataset, alt } = image
            dataset.imageStatus = '🎯'
            Object.values(dataset)
                .filter((value) => {
                    if (value) {
                        return GetExtension(value)
                    }
                })
                .forEach(src => {
                    const createImage = document.createElement('img')
                    createImage.src = src ?? ''
                    createImage.alt = alt
                    Images.push(createImage)
                })
        })

    const Resp = Promise.all(
        QueryImageData
            .map( async (image) => {
                return await CreateStorageObj(image)
            })
    )

    return Resp
}

const GetImages = async () => {
    const Images = await Data()
    if (Images.length) {
       for (let i in Images) {
            await chrome.runtime.sendMessage({
                Image : Images[i]
            })
       }
    }
}

const ExtensionIsOpen = document.getElementById('Image_Tracker_Html') as HTMLHtmlElement

if (!!ExtensionIsOpen) {
    window.removeEventListener('wheel', GetImages)
    window.removeEventListener('load', GetImages)
} else {
    window.addEventListener('load', GetImages)
    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            GetImages()
        }
    })
}

chrome.runtime.sendMessage({
    Href : window.location.href
})