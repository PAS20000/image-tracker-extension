import * as React from 'react'
import { AuthContext } from '..'

const useAuthCTX = () => {
    const { member, isAuth } = React.useContext(AuthContext)
   
    return {
        member,
        isAuth
    }
}

export default useAuthCTX