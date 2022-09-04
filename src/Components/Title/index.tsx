import * as React from 'react'
import { Container, Image, Text } from './index.styles'

type Props = {
    children:React.ReactNode
    src?:string
}
const Title = ({
    children,
    src
} : Props) => {

    return (
        <Container>
            {src && 
                <Image src={src}/>
            }
            <Text>
                {children}
            </Text>
        </Container>
    )
}

export default Title