import * as React from 'react'
import { FaUser } from 'react-icons/fa'
import Flex from '../../../../Layout/Flex'
import { DefaultImage, Image, Welcome } from './index.styles'

type Props = {
    avatar : string | undefined | null
    name : string  | undefined
}

const Avatar = ({
    avatar,
    name
} : Props) => {

    return (
        <>
         {avatar ? 
            <Flex>
                <div>
                    <Image src={avatar} alt='your picture' /> 
                </div>
                <Welcome>
                    Welcome {name} !
                </Welcome>
            </Flex>
            :
            <DefaultImage>
                <Flex>
                    <div className='Image'>
                        <div>
                           <FaUser />
                        </div>
                    </div>
                    <Welcome>
                        Welcome {name} !
                    </Welcome>
                </Flex>
            </DefaultImage>
         }
        </>
    )
}

export default Avatar