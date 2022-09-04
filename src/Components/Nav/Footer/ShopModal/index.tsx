import * as React from 'react'
import Modal from "../../../Modal"
import usePortalCTX from '../../../../Contexts/PortalContext/usePortalCTX'
import { useTheme } from 'styled-components'
import TitleModal from '../../../Modal/TitleModal'
import { IoMdCart } from 'react-icons/io'
import { Card, Label, Sign } from './index.styles'
import useWindow from '../../../../Hooks/useWindow'

const ShopModal = () => {
    const { isOpen, setIsOpen } = usePortalCTX()
    const { color } = useTheme()
    const { WindowConfig } = useWindow()

    const openWindow = (href : string, title : string) => {
        window.open(!!href ? href : 'https://www.patreon.com/user?u=77769234&fan_landing=true', title, WindowConfig)
    }

    return(
        <Modal>
            <TitleModal onClose={() => setIsOpen({...isOpen, shop : false})}>
                <IoMdCart size='24px'/> Shopping
            </TitleModal>
            <Card>
                <div>
                    <img src='img/logo-gold.png' alt='logo-gold' />
                </div> 
                <Sign bg={color.yellow} onClick={() => openWindow('https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359', 'Become a Member')}>
                    Golden Member <br />
                    Limit of 400 images per domain
                    <Label>
                        $ 7.99
                    </Label>
                </Sign>
            </Card>
            <Card>
                <div>
                    <img src='img/logo-verde.png' alt='logo-platinum' />
                </div>
                <Sign bg={color.green} onClick={() => openWindow('https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359', 'Become a Member')}>
                    Platinum Member <br />
                    Limit of 700 images per domain
                    <Label>
                        $ 9.99
                    </Label>
                </Sign>
            </Card>
            <Card>
                <div>
                    <img src='img/logo-diamound.png' alt='logo-diamound' className='Diamound'/>
                </div>
                <Sign bg={color.cyan} onClick={() => openWindow('https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359', 'Become a Member')}>
                    Diamond Member <br />
                    Unlimited images per domain
                    <Label>
                        $ 14.99
                    </Label>
                </Sign>
            </Card>
        </Modal>
    )
}

export default ShopModal