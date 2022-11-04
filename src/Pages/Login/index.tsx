import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthCTX from '../../Contexts/AuthContext/useAuthCTX'

const Login = () => {
    const { isAuth } = useAuthCTX()
    const Goto = useNavigate()

    React.useEffect(() => {
        if (isAuth) {
            Goto('/popup.html')
        }
    }, [isAuth])
    
    return (
        <>{!isAuth &&
            <iframe src='http://localhost:3000/?extension=true' style={{
                width : '100%',
                height : '99.4vh',
                border : 'none',
            }}/>
          }
        </>
    )
}

export default Login