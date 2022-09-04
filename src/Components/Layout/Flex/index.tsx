import * as React from 'react'
import styled from 'styled-components'

type Props = {
    children:React.ReactNode
    margin?:string
    justContent?:string
    height?:string
    direction?:string
} & React.HtmlHTMLAttributes<HTMLDivElement>

const Style = styled.div<Props>`
    display: flex;
    justify-content: ${props => props.justContent ?? 'start'};
    height: ${props => props.height ?? 'auto'};
    margin: ${props => props.margin ?? '0px'};
    flex-direction: ${props => props.direction ?? 'row'};
    button{
        margin: 10px;
    }
`

const Flex = (props:Props) => {
    return <Style {...props} />
}

export default Flex