import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../../Components/Alert'
import Card from '../../Components/Card'
import Carousel from '../../Components/Carousel'
import Load from '../../Components/Load'
import Footer from '../../Components/Nav/Footer'
import Title from '../../Components/Title'
import useAuthCTX from '../../Contexts/AuthContext/useAuthCTX'
import useLiveStorageCTX from '../../Contexts/LiveStorageContext/useLiveStorageCTX'
import usePortalCTX from '../../Contexts/PortalContext/usePortalCTX'
import useHowLogo from '../../Hooks/useHowLogo'

const Home = () => {
    const { setIsOpen } = usePortalCTX()
    const { IsFallBack, PaginationImages } = useLiveStorageCTX()
    const { member, isAuth } = useAuthCTX()
    const HowLogo = useHowLogo()
    const Goto = useNavigate()

    React.useEffect(() => {
      if (!isAuth) {
          Goto('/')
      }
    }, [isAuth])

    React.useEffect(() => {
      if (member?.signature === 'free' && !IsFallBack.Storage) {
        setIsOpen(current => {
          return {
            ...current,
            shop : true
          }
        })
      }
    },[setIsOpen, member])
      
    if (IsFallBack.Storage) {
      return <Load />
    }

    return (
      <>
        <Title src={HowLogo()}>
          Image Tracker
        </Title>
        <Carousel>
          {PaginationImages[0] ?
           PaginationImages.map(({ blob, alt, id }) => {
              return <Card src={URL.createObjectURL(blob as Blob)} alt={alt} id={id} key={id} />
            })
            :
            <Alert 
              title='There are no images to show'
              describe='Scroll down to get the photos from the website '
            />
          }
        </Carousel>
        {PaginationImages[0] &&
          <Footer />
        }
      </>
    )
}

export default Home