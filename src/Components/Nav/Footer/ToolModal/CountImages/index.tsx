import * as React from 'react'
import { FaImages } from 'react-icons/fa'
import { IStorage } from '../../../../../Extension/Content'
import { CountImagesStyle } from './index.styles'

type Props = {
    Storage : IStorage[]
}

const CountImages = ({ 
    Storage 
} : Props) => {

    const Info = {
        zipSize() {
            //const StorageSizeKB = Storage.length * 350
        },
        countImages() {
            const decimal = `${Storage.length}`.length
            const house = Storage.length.toString().split('')
            if (decimal < 4) {
                return Storage.length
            }
            if (decimal === 4) {
                return `${house[0]}.${house[1]}K`
            }
            if (decimal === 5) {      
                return `${house[0] + house[1]}.${house[2]}K`
            }
            if (decimal === 6) {      
                return `${house[0] + house[1] + house[2]}.${house[3]}K`
            } 
            else {
                return '♾️'
            }
        }
    }

    return (
        <CountImagesStyle>
            <span>
                <FaImages />
                {Info.countImages()}
            </span>
        </CountImagesStyle>
    )
}

export default CountImages