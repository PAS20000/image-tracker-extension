import Api from "../../Tools/Api"

chrome.runtime.onInstalled.addListener(() => {
    console.info('[ Image Tracker Install ]')
})

chrome.runtime.onMessage.addListener( async (message : { Href : string }) => {
    const error = async (error : string) => {
        throw new Error(error)
    }
    
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

    if (message.Href) {
        const TapLink = message.Href.split('/')[2]
        const SearchUrl =  message.Href.replace('?', '=').replace('&', '=').split('=')
        const googleToken = SearchUrl[2]
        const patreonToken = SearchUrl[4] ?? ''
        if (TapLink === 'image-tracker.taplink.ws') {
            const res = await Api(googleToken).post('/member/auth', {
                data : {
                    patreonToken
                }
            }).catch((e) => {
                error(`res : ${e}`)
            })
            const { token } = await res?.data as any
            await chrome.storage.local.remove(['token']).catch((e) => {
                error(`chrome storage local clear error ${e}`)
            })
            await chrome.storage.local.set({ token }).catch((e) => {
                error(`chrome storage local set error ${e}`)
            })
            if (chrome.runtime.id) {
                chrome.runtime.reload()
            }
        }
    }
})