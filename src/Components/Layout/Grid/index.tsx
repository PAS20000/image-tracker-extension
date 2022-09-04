import * as React from 'react'
import styled from 'styled-components'

type Props = {
    children:React.ReactNode
    columns?:string
    rows?:string
} & React.HtmlHTMLAttributes<HTMLDivElement>

const Style = styled.div<Props>`
    display: grid;
    grid-template-columns: ${props => props.columns ?? '1fr'};
    grid-template-rows: ${props => props.rows ?? '1fr'};
`
const Grid = (props:Props) => {
    return <Style {...props} />
}

export default Grid