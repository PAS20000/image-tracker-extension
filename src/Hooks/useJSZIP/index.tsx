import JSZip from 'jszip';
import * as React from 'react'
import { IStorage } from '../../Extension/Content';
import useFakeJquery from '../useFakeJquery';

const useJSZIP = () => {
    const [Extension, setExtesion] = React.useState<string>('')
    const [isFallback, setIsFallback] = React.useState(false)
    const { '$' : $$ } = useFakeJquery()

    const Create = async (Storage : IStorage[]) => {
        setIsFallback(true)
        const zip = new JSZip()
        zip.file('Hello.txt', `
            👋 Thanks for using the 🎯 image tracker 🎯!

            about us : https://image-tracker.taplink.ws/
        `)
        const img = zip.folder('images') as JSZip
        Storage
            .forEach(({ blob, alt, extension }, index) => {
                setExtesion(extension)
                img.file(`${ (index + 1) + '-' + alt }.${ !!Extension ? Extension : extension }`, blob as Blob)
            })
        
        const blob = await zip.generateAsync({ type : 'blob' })
        const link = URL.createObjectURL(blob)

        return {
            blob,
            link,
        }
    }
   
   return {
        Create,
        setExtesion,
        Extension,
        async Download(Storage :IStorage[]){
            const Zip = await Create(Storage)
            const a = document.createElement('a')
            a.href = Zip.link
            a.download = 'Image-Tracker-Zip-Images'
            a.target = '__blank'
            a.click()
            a.remove()
            URL.revokeObjectURL(Zip.link)
            setIsFallback(false)
      },
      isFallback
   }
}

export default useJSZIP