import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'

interface IIsOpen{
    shop : boolean
    tools : boolean
    profile : boolean
}

export type PortalCTX = {
    isOpen : IIsOpen
    setIsOpen : SetState<IIsOpen>
}

export const PortalContext = React.createContext<PortalCTX>({
    isOpen:{
        tools : false,
        shop : false,
        profile : false
    },
    setIsOpen:() => {}
})

const PortalProvider = ({
    children
} : PropsCTXdefault) => {
    const [isOpen, setIsOpen] = React.useState<IIsOpen>({
        tools : false,
        shop : false,
        profile : false
    })

   return(
        <PortalContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </PortalContext.Provider>
    )
}
   
export default PortalProvider