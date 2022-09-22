import JSZip from 'jszip';
import * as React from 'react'
import { IStorage } from '../../Extension/Content';

const useJSZIP = () => {
    const [Extension, setExtesion] = React.useState<string>('')
    const [isFallback, setIsFallback] = React.useState(false)

    const Create = async (Storage : IStorage[]) => {
        setIsFallback(true)
        const zip = new JSZip()
        const uniqueOrigins = [
            ...new Set(
                Storage.map(({ origin }) => origin)
            )
        ]
        for (let Origin of uniqueOrigins) {
            const currentStorage = Storage.filter(({ origin }) => origin === Origin)
            const folder = zip.folder(Origin) as JSZip
            for (let i = 0; i < currentStorage.length; i++) {
                const { blob, alt, extension } = currentStorage[i];
                setExtesion(extension)
                folder.file(`${ (i + 1) + '-' + alt }.${ !!Extension ? Extension : extension }`, blob as Blob)
            }
        }
        zip.file(`Hello-you-downloaded-${Storage.length}-images-from-${uniqueOrigins.length}-sites.txt`, `
            👋 Thanks for using the 🎯 image tracker 🎯!

            about us : https://imagetracker.org
        `)

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