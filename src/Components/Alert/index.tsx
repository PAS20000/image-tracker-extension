import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HiOutlineRefresh } from 'react-icons/hi'
import { RiErrorWarningFill } from "react-icons/ri"
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { Error } from "./index.styles"

type Props = {
    title : string
    describe : string
}

const Alert = ({
    title,
    describe
} : Props) => {
    const Goto = useNavigate()
    return ReactDOM.createPortal(
        <>
            <Error>
                <h2>
                    <RiErrorWarningFill /> {title}
                </h2>
                <p>
                    {describe} &nbsp;
                    <Button title='reload' onClick={() => Goto(0)}>
                        <HiOutlineRefresh style={{
                            marginLeft : '2px',
                            marginTop : '2px'
                        }}/>
                    </Button>
                </p>
                <img src='/how-use-me.webp' alt='anyway' width='100%' height='auto'/>
            </Error>
        </>,
        document.getElementById('portal') as HTMLElement
    )
}

export default Alert