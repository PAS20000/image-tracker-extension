import JSZip from 'jszip';
import * as React from 'react'
import { IStorage } from '../../Extension/Content';

const useJSZIP = () => {
    const [Extension, setExtesion] = React.useState<string>('')
    const [isFallback, setIsFallback] = React.useState(false)

    const Create = async (Storage : IStorage[]) => {
        setIsFallback(true)
        const zip = new JSZip()
        zip.file('Hello.txt', `
            👋 Thanks for using the 🎯 image tracker 🎯!

            about us : https://imagetracker.org
        `)
        const uniqueOrigins = [
            ...new Set(
                Storage.map(({ origin }) => origin)
            )
        ]
        for (let Origin of uniqueOrigins) {
            const currentStorage = Storage.filter(({ origin }) => origin === Origin)
            const folder = zip.folder(Origin) as JSZip
            for (let i = 0; i < currentStorage.length; i++) {
                const { blob, alt, extension } = Storage[i];
                setExtesion(extension)
                folder.file(`${ (i + 1) + '-' + alt }.${ !!Extension ? Extension : extension }`, blob as Blob)
            }
        }

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
            a.target = '_blank'
            a.click()
            a.remove()
            URL.revokeObjectURL(Zip.link)
            setIsFallback(false)
      },
      isFallback
   }
}

export default useJSZIP