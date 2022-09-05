import * as React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Form from '../../Components/Form'
import Flex from '../../Components/Layout/Flex'
import Grid from '../../Components/Layout/Grid'
import useAuthCTX from '../../Contexts/AuthContext/useAuthCTX'
import useWindow from '../../Hooks/useWindow'
import Api from '../../Tools/Api'

const Login = () => {
    const { isAuth } = useAuthCTX()
    const Goto = useNavigate()
    const { WindowConfig } = useWindow()

    const Submit = async (e : React.FormEvent) => {
        e.preventDefault()
        const { data } = await Api().get('/oauth/google')
        const Href = data.GoogleOauth.href
        window.open(Href, 'Oauth', WindowConfig)
    }

    React.useEffect(() => {
        if (isAuth) {
            Goto('/popup.html')
        }
    }, [isAuth])
    
    return (
        <>{!isAuth &&
            <Form onSubmit={(e) => Submit(e)}>
                <Flex direction='column'>
                    <img src='img/logo-vermelho.png'/>
                    <Grid>
                        <h2>
                            Image Tracker Log in
                        </h2>
                        <button type='submit' className='Google'>
                            <FaGoogle /> Continue with Google
                        </button>
                    </Grid>
                </Flex>
            </Form>
          }
        </>
    )
}

export default Login