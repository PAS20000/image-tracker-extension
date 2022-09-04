import { useContext } from "react"
import { PortalContext } from ".."

const usePortalCTX = () => {
    const { isOpen, setIsOpen } = useContext(PortalContext)

    return {
        isOpen,
        setIsOpen,
        closeAll(){
            setIsOpen({
                tools : false,
                shop : false,
                profile : false
            })
        }
    }
}

export default usePortalCTX