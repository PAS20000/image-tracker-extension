import * as React from 'react'
import Api from '../../Tools/Api'
import { PropsCTXdefault } from '../types'

export type Partner = [
    'partner'
][number]

export type Signature = [
    'free',
    'gold',
    'platinum',
    'diamond',
    'beta-tester',
    'orichalcum',
    `promo-${Partner}`
][number]

export interface IMember {
    id : string
    email : string
    avatar : string
    password : string
    name : string
    nickname : string
    signature : Signature
    secrets : string[]
    verified : {
        email : boolean
    }
    createdAt : Date
    updatedAt : Date
    access_token : string
    refresh_token : string
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
   const isAuth = !!member?.id

   const Auth = () => {
        chrome.storage.sync.get(null, async ({ token }) => {
            if (!!token) {
                const res = await Api(token).post('/member/jwt')
                    .catch(async (e) => {
                        console.error(e)
                        await chrome.storage.sync.remove(['token'])
                            .catch((err) => {
                                console.error(err)
                            })
                            .finally(() => {
                                setMember(undefined)
                                chrome.runtime.reload()
                            })
                        return null
                    })
                setMember(res?.data.member)
            }
        })
    }

    React.useEffect(() => {
        chrome.storage.sync.get(null, async ({ token }) => {
            if (!!token) {
                setMember({
                    id : '1',
                    name : 'PAS',
                    access_token : '',
                    avatar : '',
                    createdAt : new Date(),
                    email : '',
                    nickname : '',
                    refresh_token : '',
                    secrets : [''],
                    signature : 'orichalcum',
                    password : '',
                    updatedAt : new Date(),
                    verified : {
                        email : true
                    }
                })
            }
        })
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