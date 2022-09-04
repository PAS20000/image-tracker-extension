import * as React from 'react'
import useLiveStorageCTX from '../../Contexts/LiveStorageContext/useLiveStorageCTX'
import {Container} from './index.styles'

type Props = {
    children : React.ReactNode
}

const Carousel = ({
    children
} : Props) => {
    const { left, right, CarouselRef } = useLiveStorageCTX()
    
    const key = (e:KeyboardEvent) => {
        e.key === 'ArrowLeft' && left()
        e.key === 'ArrowRight' && right()
    }

    React.useEffect(() => {
        window.onkeydown = (e) => key(e)
        window.onwheel = (e) => e.deltaY > 0 ? right() : left()
    },[left, right])

    return(
        <Container id='carousel' ref={CarouselRef}>
            {children}
        </Container>
    )
}

export default Carousel