import * as React from 'react'
import { MdLogout } from 'react-icons/md'
import useHowLogo from '../../../../../Hooks/useHowLogo'
import Button from '../../../../Button'
import Flex from '../../../../Layout/Flex'
import Avatar from '../Avatar'
import { Container, Info, Shield } from './index.styles'

type Props = {
    icon : React.ReactNode
    ID ?: string
    title : string | undefined
    email : string  | undefined
    signature : string  | undefined
    avatar : string  | undefined | null
    name : string  | undefined
}

const Card = ({
    ID,
    icon,
    title,
    email,
    signature,
    avatar,
    name
} : Props) => {
    const HowLogo = useHowLogo()

    return (
        <Container>
            <h2>
               {icon} {title}
            </h2>
            <Avatar 
                avatar={avatar} 
                name={name}
            />
            <Info>
                <h3>
                    Signature : &nbsp; {signature}<Shield src={HowLogo()} alt={HowLogo()} />
                </h3>
                <h3>
                    Email : &nbsp; {email}
                </h3>
            </Info>
            <Flex justContent='end'>
                <Button onClick={async () => {
                    await chrome.storage.local.remove(['token'])
                    chrome.runtime.reload()
                }}>
                    <MdLogout />
                </Button>  
            </Flex>           
        </Container>
    )
}

export default Card