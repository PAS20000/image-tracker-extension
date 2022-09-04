import * as React from 'react'
import * as ReactDOM from 'react-dom'
import usePortalCTX from '../../Contexts/PortalContext/usePortalCTX'
import { BackGround, Container } from './index.styles'

type Props = {
    children:React.ReactNode
} & React.HtmlHTMLAttributes<any>

const Modal = (props:Props) => {
    const { closeAll } = usePortalCTX()

    return ReactDOM.createPortal(
       <>
          <BackGround onClick={() => closeAll()}/>
          <Container {...props}/>
       </>,
       document.getElementById('portal') as HTMLElement
    )
}

export default Modal