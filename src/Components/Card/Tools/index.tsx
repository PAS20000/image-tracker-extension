import * as React from 'react'
import { BsFillEyeFill } from 'react-icons/bs'
import { FaDownload, FaTrash } from 'react-icons/fa'
import useWindow from '../../../Hooks/useWindow'
import { db } from '../../../Tools/Server'
import Link from '../../Link'
import Container from './index.styles'

type Props = {
    href:string
    download:string
    id:string
}

const Tools = ({
    href,
    download,
    id
} : Props) => {
    const { WindowConfig } = useWindow()

    return(
        <Container>
            <Link href={`#${href}`} target='_self' title='Open Image in new window' onClick={() => 
                window.open(href, 'open image', WindowConfig)}>
                <BsFillEyeFill />
            </Link>
            <Link href={href} target='_blank' download={download} title='download Image'>
                <FaDownload />
            </Link>
            <Link href={`#Deleted:${id}`} title='Delete' onClick={async () => await db.Images.delete(id)}>
                <FaTrash />
            </Link>
        </Container>
    )
}

export default Tools