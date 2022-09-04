import * as React from 'react'
import useFakeJquery from '../../Hooks/useFakeJquery'
import {ImageStyle, Box, Container} from './index.styles'
import Tools from './Tools'

type Props = {
    src:string
    alt:string
    id:string
}

const Card = ({
    alt,
    src,
    id
} : Props) => {
   const ImageRef = React.useRef<HTMLImageElement>(null)
   const [Scale, setScale] = React.useState<number>(1.50)
   const { $ } = useFakeJquery()

   const style = {
    img(e : React.MouseEvent<HTMLImageElement, MouseEvent>, scale ?: number){
        const img = ImageRef.current
        const Carousel = $('#carousel')

        const x = Carousel.scrollLeft + e.pageX - e.currentTarget.offsetLeft
        const y = e.pageY - e.currentTarget.offsetTop

        setScale(scale ?? Scale)

        if (img) {
            img.style.transformOrigin = `${x}px ${y}px`  
            img.style.transform =`scale(${scale ?? Scale})` 
        }
    },
    box:{ 
            enter(){
                const img = ImageRef.current
                if (img) {
                    img.style.transition = '0s'
                }
            },
            leave(){
                const img = ImageRef.current
                setScale(1.50)
                if (img) {
                    img.style.transition = '1s ease-in'
                    img.style.transform=`scale(1)`
                    img.style.transformOrigin = 'center center'
                }
            }
        }   
    }

    React.useEffect(() => {
        document.onselectstart = (e) => e.preventDefault()
    }, [])

    return (
        <Container>
            <Box 
                onMouseEnter={() => style.box.enter()}
                onMouseLeave={() => style.box.leave()}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
            >
                <ImageStyle
                    ref={ImageRef}
                    loading='lazy'
                    src={src} 
                    alt={alt}
                    onContextMenu={(e) => style.img(e, Scale > 1 ? Scale - 0.25 : Scale)}
                    onMouseMove={(e) => style.img(e)}      
                    onClick={(e) => style.img(e, Scale + 0.25)}         
                />
            </Box>
            <Tools 
                href={src}
                download={src}
                id={id}
            />
        </Container>
    )
}

export default Card
