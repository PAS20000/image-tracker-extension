import * as React from 'react'
import { FaArrowLeft, FaArrowRight, FaMoon, FaSun, FaTools, FaUser } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'
import usePortalCTX from '../../../Contexts/PortalContext/usePortalCTX'
import { Container } from './index.styles'
import { useTheme } from 'styled-components'
import Button from '../../Button'
import useCustomThemeCTX from '../../../Contexts/CustomThemeContext/useCustomThemeCTX'
import ToolModal from './ToolModal'
import Flex from '../../Layout/Flex'
import ProfileModal from './ProfileModal'
import useLiveStorageCTX from '../../../Contexts/LiveStorageContext/useLiveStorageCTX'
import useWindow from '../../../Hooks/useWindow'

const Footer = () => {
    const { right, left } = useLiveStorageCTX()
    const { isOpen, setIsOpen } = usePortalCTX()
    const { color, title } = useTheme()
    const { ChangeTheme } = useCustomThemeCTX()
    const { WindowConfig } = useWindow()

    return(
        <Container>
            {isOpen.tools &&
                <ToolModal />
            }
            {isOpen.profile && 
                <ProfileModal />
            }
            <Flex justContent='center'>
                <Button title='Back' color={color.green} onClick={left}>
                    <FaArrowLeft />
                </Button>
                <Button title='Shop' onClick={() => {
                    window.open('https://imagetracker.org/signatures', 'Shop', WindowConfig)
                }} color={color.red}>
                   <IoMdCart />
                </Button>
                <Button title='Tools' onClick={() => setIsOpen({ ...isOpen, tools : true })} color={color.green}>
                    <FaTools />
                </Button>
                <Button title='Profile' onClick={() => setIsOpen({ ...isOpen, profile : true })} color={color.green}>
                    <FaUser />
                </Button>
                <Button color={title === 'dark' ? color.yellow : color.purple } onClick={() => ChangeTheme()}>
                    {title === 'dark' ?
                        <FaSun />
                        :
                        <FaMoon /> 
                    }
                </Button>
                <Button title='Next'color={color.green} onClick={right}>
                    <FaArrowRight />
                </Button>
            </Flex>
        </Container>
    )
}

export default Footer
