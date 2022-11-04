import * as React from 'react'
import { FaArrowLeft, FaArrowRight, FaMoon, FaSun, FaTools, FaUser } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'
import { HiOutlineRefresh } from 'react-icons/hi'
import usePortalCTX from '../../../Contexts/PortalContext/usePortalCTX'
import { Container } from './index.styles'
import { useTheme } from 'styled-components'
import Button from '../../Button'
import useCustomThemeCTX from '../../../Contexts/CustomThemeContext/useCustomThemeCTX'
import ToolModal from './ToolModal'
import Flex from '../../Layout/Flex'
import useLiveStorageCTX from '../../../Contexts/LiveStorageContext/useLiveStorageCTX'
import useWindow from '../../../Hooks/useWindow'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const { right, left } = useLiveStorageCTX()
    const { isOpen, setIsOpen } = usePortalCTX()
    const { color, title } = useTheme()
    const { ChangeTheme } = useCustomThemeCTX()
    const { WindowConfig } = useWindow()
    const Goto = useNavigate();

    return(
        <Container>
            {isOpen.tools &&
                <ToolModal />
            }
            <Flex justContent='center'>
                <Button title='Back' color={color.green} onClick={left}>
                    <FaArrowLeft />
                </Button>
                <Button title='reload' onClick={() => Goto(0)}>
                    <HiOutlineRefresh style={{
                        marginTop : '3px'
                    }}/>
                </Button>
                <Button title='Shop' onClick={() => {
                    window.open('http://localhost:3000/signatures/', 'modal', WindowConfig)
                }} color={color.red}>
                   <IoMdCart style={{
                        marginTop : '3px'
                    }}/>
                </Button>
                <Button title='Tools' onClick={() => setIsOpen({ ...isOpen, tools : true })} color={color.green}>
                    <FaTools style={{
                        marginTop : '3px'
                    }}/>
                </Button>
                <Button title='Profile' onClick={() => {
                     window.open('http://localhost:3000/profile/', 'modal', WindowConfig)
                }}>
                    <FaUser />
                </Button>
                <Button color={title === 'dark' ? color.yellow : color.purple } onClick={() => ChangeTheme()}>
                    {title === 'dark' ?
                        <FaSun style={{
                            marginTop : '3px'
                        }}/>
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
