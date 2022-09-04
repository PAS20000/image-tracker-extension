import * as React from 'react'
import Modal from "../../../Modal"
import usePortalCTX from '../../../../Contexts/PortalContext/usePortalCTX'
import TitleModal from '../../../Modal/TitleModal'
import { FaGoogle, FaPatreon, FaUser } from 'react-icons/fa'
import useAuthCTX from '../../../../Contexts/AuthContext/useAuthCTX'
import Card from './Card'
import styled from 'styled-components'
import Api from '../../../../Tools/Api'
import useWindow from '../../../../Hooks/useWindow'

const PatreonLogIn = styled.button`
    transition: 0.7s ease;
    padding: 15px;
    font-weight: bold;
    font-family: sans-serif;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    border: solid 2px ${props => props.theme.color.icon};
    cursor: pointer;
    color: ${props => props.theme.color.icon};
    background: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    svg {
        font-size: 24px;
        margin: -7px 5px;
    }

    &:hover {
        transition: 0.7s ease;
        transform: scale(1.2);
        color: ${props => props.theme.color.purple};
        border: solid 2px ${props => props.theme.color.purple};
    }
`

const SelectProfile = styled.div`
    display: flex;
    justify-content: center;
    button {
        color : ${props => props.theme.color.icon};
        padding: 8px;
        border-radius: ${props => props.theme.utils.borderRadius};
        background: ${props => props.theme.color.bg[0]};
        border: solid 2px;
        margin: 5px;
        font-size: 20px;
        cursor: pointer;

        svg {
            transform: translate(0px, 2px);
        }

        &:hover {
            transition: 0.5s;
            opacity: 0.5;
        }
    }
    button.selected {
        color: ${props => props.theme.color.red};
    }
`

const ProfileModal = () => {
    const { member } = useAuthCTX()
    const { isOpen, setIsOpen } = usePortalCTX()
    const { WindowConfig } = useWindow()
    const [profile, setProfile] = React.useState<{google ?: boolean, patreon ?: boolean}>({
        google : true,
        patreon : false
    })
    const PatreonAuth = () => {
        chrome.storage.local.get(null, async ({ token }) => {
            const { data } = await Api(token).get('/oauth/patreon')
            const href = data.PatreonOauth.Href
            window.open(href, 'Oauth', WindowConfig)
        })
    }
    if (member) {
        const { avatar, email, name, patreon, signature, Google_id } = member
        return(
            <Modal>
                <TitleModal onClose={() => setIsOpen({ ...isOpen, profile : false })}>
                   <FaUser /> Your Profiles
                </TitleModal>
                <SelectProfile>
                    <button className={profile.google ? 'selected' : ''} onClick={() => setProfile({...profile, google : true, patreon : false})}>
                        <FaGoogle />
                    </button>
                    <button className={profile.patreon ? 'selected' : ''} onClick={() => setProfile({...profile, patreon : true, google : false})}>
                        <FaPatreon />
                    </button>
                </SelectProfile>
                {profile.google &&
                    <Card
                        icon={ <FaGoogle style={{transform:'translate(4px, 2px)'}}/> }
                        title='oogle'
                        avatar={avatar}
                        name={name}
                        email={email}
                        signature={signature}
                    />
                }
                {!!patreon ? 
                    !!profile.patreon && 
                    <Card
                        icon={ <FaPatreon /> }
                        title='Patreon'
                        avatar={patreon.image_url}
                        name={patreon.first_name}
                        email={patreon.email}
                        signature={signature}
                    />
                    :
                    !!profile.patreon &&  
                    <div style={{textAlign : 'center', marginTop: '30%'}}>
                        <PatreonLogIn onClick={PatreonAuth}>
                            <FaPatreon /> Register Patreon
                        </PatreonLogIn>
                    </div> 
                }
            </Modal>
        )
    } else {
        return <></>
    }
}

export default ProfileModal