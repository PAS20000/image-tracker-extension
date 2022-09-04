import * as React from "react"
import { Style } from "./index.styles"

type Props = {
    children : React.ReactNode
    onSubmit : React.FormEventHandler<HTMLFormElement>
}

const Form = ({
    children,
    onSubmit
} : Props) => {

    return (
        <Style onSubmit={onSubmit}>
            {children}
        </Style>
    )
}

export default Form