import * as React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useTheme } from 'styled-components'
import Button from '../../Button'
import Flex from '../../Layout/Flex'
import { Title } from './index.styles'

type Props = {
    children:React.ReactNode
    onClose?:React.MouseEventHandler
}

const TitleModal = ({
    children,
    onClose,
} : Props) => {
    const { color } = useTheme()
    
    return(
        <Flex margin='5px' justContent='center'>
            <Title>
                {children}
            </Title>
            <Button title='Close donate' onClick={onClose} color={color.red}>
                <AiOutlineClose />
            </Button>       
        </Flex>
    )
}

export default TitleModal