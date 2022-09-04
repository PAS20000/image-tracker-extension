import * as React from 'react'
import Api from '../../Tools/Api'
import { PropsCTXdefault } from '../types'

export type PatreonInfo = {
    _id ?: string
    first_name ?: string
    last_name ?: string
    full_name ?: string
    vanity ?: string
    email ?: string
    about ?: string
    facebook_id ?: string
    image_url ?: string
    thumb_url ?: string
    youtube ?: string
    twitter ?: string
    facebook ?: string
    created ?: Date
    url ?: string
    like_count ?: number
    comment_count ?: number
    campaign ?: {}
}

export type Signature = [
    'free',
    'gold',
    'platinum',
    'diamond',
    'beta tester'
][number]

export interface IMember {
    Google_id ?: string
    avatar ?: string | null
    name ?: string
    email ?: string
    signature ?: Signature
    locale ?: string
    gender ?: string
    patreon ?: PatreonInfo
    createdAt ?: Date  
}

export type AuthContextReturn = {
    member ?: IMember
    isAuth ?: boolean
}

export const AuthContext = React.createContext<AuthContextReturn>({})

const AuthProvider = ({
    children
} : PropsCTXdefault) => {
   const [member, setMember] = React.useState<IMember>()
   const isAuth = !!member?.Google_id
   const Auth = () => {
        chrome.storage.local.get(null, async ({ token }) => {
            if (!!token) {
                const res = await Api(token).post('/member/jwt')
                    .catch(async (e) => {
                        console.error(e)
                        await chrome.storage.local.remove(['token'])
                            .catch((err) => {
                                console.error(err)
                            })
                            .finally(() => {
                                setMember(undefined)
                                chrome.runtime.reload()
                            })
                    })
                setMember(res?.data.member)
            }
        })
    }

    React.useEffect(() => {
        Auth()
        setMember({ Google_id : '1', signature : 'diamond', name : 'fake' })
    }, [])

   return(
        <AuthContext.Provider value={{
            member,
            isAuth
        }}>
           {children}
        </AuthContext.Provider>
    )
}
   
export default AuthProvider