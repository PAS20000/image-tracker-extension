import * as React from 'react'
import { Container } from './index.styles'

export type Props = {
    margin ?: string
    position ?: string
    ref ?: any
} &  React.ButtonHTMLAttributes<any>

const Button = (props:Props) => {

    return(
        <Container {...props} />
    )
}

export default Button
