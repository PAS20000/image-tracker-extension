import * as React from 'react'
import { Container } from './index.styles'

type Props = {
    children:React.ReactNode
    href:string
    target?:string,
    download?:string
    title?:string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = (props:Props) => {

    return(
        <Container {...props} />
    )
}

export default Link
