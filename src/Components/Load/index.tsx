import * as React from 'react'
import useHowLogo from '../../Hooks/useHowLogo'
import { Loading } from './index.styles'

const Load = () => {
    const HowLogo = useHowLogo()

    return (
        <Loading>
          <img src={HowLogo()}/>
          <h2>Loading...</h2>
        </Loading>
    )
}

export default Load