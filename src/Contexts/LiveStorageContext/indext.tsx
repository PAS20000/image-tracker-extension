import { useLiveQuery } from 'dexie-react-hooks'
import * as React from 'react'
import { IStorage } from '../../Extension/Content'
import { db } from '../../Tools/Server'
import useAuthCTX from '../AuthContext/useAuthCTX'
import { PropsCTXdefault, SetState } from '../types'

export type isFall = {
    Storage : boolean,
    Delete : boolean
}


type VerifySignatureProps = {
    SignatureLimited : number
    origin : string
}

export type LiveStorageCTX = {
    Images : IStorage[]
    PaginationImages : IStorage[]
    IsFallBack : isFall
    FilterOptions : string[]
    setFilterOptions : SetState<string[]>
    setCurrentFilters : SetState<string[]>
    CurrentFilters : string[]
    left : () => void
    right : () => void
    CarouselRef ?: React.RefObject<HTMLDivElement>
}

export const LiveStorageContext = React.createContext<LiveStorageCTX>({
    Images : [],
    PaginationImages : [],
    IsFallBack : {
        Delete : false,
        Storage : true
    },
    FilterOptions : [],
    setFilterOptions : () => {},
    setCurrentFilters : () => {},
    CurrentFilters : [],
    left : () => {},
    right : () => {}
})

const LiveStorageProvider = ({
    children
} : PropsCTXdefault) => {
    const CarouselRef = React.useRef<HTMLDivElement>(null) 
    const [FilterOptions, setFilterOptions] = React.useState<string[]>([])
    const [CurrentFilters, setCurrentFilters] = React.useState<string[]>([])
    const [pagination, setPagination] = React.useState([0, 20])

    const { member } = useAuthCTX()
    const [IsFallBack, setIsFallBack] = React.useState<isFall>({
        Storage : true,
        Delete : false,
    })

    const Loaded = () => {
        setIsFallBack(current => {
            return {
                ...current,
                Storage : false
            }
        })
    }
    
    const isPromo = () => {
        if (!member?.signature) return
        const IsPromo = member.signature.split(' ')[0] === 'promo'
        return IsPromo
    }

    const PaginationImages = useLiveQuery(async () => {
        if (CurrentFilters.length) {
            return await db.Images.where('origin').anyOfIgnoreCase(CurrentFilters).offset(pagination[0]).limit(pagination[1]).toArray()
        } else {
            return await db.Images.offset(pagination[0]).limit(pagination[1]).toArray()
        }
    } , [CurrentFilters, pagination])

    const Images = useLiveQuery(async () => {
        if (!member?.signature) return

        const AllImages = async () => {
            if (CurrentFilters.length) {
                return await db.Images.where('origin').anyOfIgnoreCase(CurrentFilters).toArray()
            } else {
                return await db.Images.toArray()
            }
        }

        const images = await AllImages()
        const origins = images.map(({ origin }) => origin)
        const uniqueOrigins = [...new Set(origins)]
        
        setFilterOptions(current => 
            current.length 
                ? 
                current 
                : 
                [
                    ...new Set(
                        origins
                    )
                ]
        )
        
        const SignatureLimited = {
            platinum : 700,
            gold : 400,
            free : 200
        }

        if (member.signature === 'beta tester' || member.signature === 'diamond' || isPromo()) {
            return images
        }

        const DeleteOrigin = async ({
            origin,
            SignatureLimited,
        } : VerifySignatureProps) => {
            await db.Images.where('origin').equals(origin).offset(SignatureLimited).primaryKeys(async (ids) => {
                await db.Images.bulkDelete(ids)
            })
        }
    
        uniqueOrigins.forEach(async (origin) => {
            const originLimited = origins.filter((Origin) => Origin === origin).length
            if (member?.signature === 'free') {
                if (originLimited > SignatureLimited.free) {
                    await DeleteOrigin ({
                        origin,
                        SignatureLimited : SignatureLimited.free
                    })
                }
            }

            if (member?.signature === 'gold') {
                if (originLimited > SignatureLimited.gold) {
                    await DeleteOrigin ({
                        origin,
                        SignatureLimited : SignatureLimited.gold
                    })
                }
            }

            if (member?.signature === 'platinum') {
                if (originLimited > SignatureLimited.platinum) {
                    await DeleteOrigin ({
                        origin,
                        SignatureLimited : SignatureLimited.platinum
                    })
                }
            }
        })

        return AllImages()
    }, [member, CurrentFilters])

    const right = () => {
        if (CarouselRef.current !== null && Images) {
            const Carousel = CarouselRef.current
            const scroll = (() => {
                return Carousel.scrollLeft += Carousel.offsetWidth
            })()
            if (scroll >= Carousel.scrollWidth) {
                Carousel.scrollLeft = 0
                setPagination(current => 
                    current[1] < Images.length ? 
                        pagination.map(int => int + 20) 
                        : 
                        current
                )
            }
        }
    }

    const left = () => {
        if (CarouselRef.current !== null) {
            const Carousel = CarouselRef.current
            const scroll = (() => {
                return Carousel.scrollLeft -= Carousel.offsetWidth
            })()
            if (scroll <= 0) {
                setTimeout(() => {
                    Carousel.scrollLeft = Carousel.scrollWidth
                }, 100)
                setPagination(current => 
                    current[0] > 0 ? 
                        pagination.map(int => int - 20) 
                        : 
                        current
                )
            }
        }
    }

    React.useEffect(() => {
        if (Images) {
            Loaded()
        }
    }, [Images])

   return(
        <LiveStorageContext.Provider value={{
            Images : Images ?? [],
            PaginationImages : PaginationImages ?? [],
            IsFallBack,
            FilterOptions, 
            setFilterOptions,
            setCurrentFilters,
            CurrentFilters,
            left,
            right,
            CarouselRef
        }}>
            {children}
        </LiveStorageContext.Provider>
    )
}
   
export default LiveStorageProvider