import useAuthCTX from "../../Contexts/AuthContext/useAuthCTX"

const useHowLogo = () => {
    const { member } = useAuthCTX()

    const verifyLogo = () => {
        if (member?.signature === 'free') {
          return 'logo-vermelho.png'
        }
        if (member?.signature === 'gold') {
          return 'logo-gold.png'
        }
        if (member?.signature === 'platinum') {
          return 'logo-verde.png'
        }
        if (member?.signature === 'diamond' || member?.signature === 'beta tester') {
          return 'logo-diamound.png'
        }
      }


      return verifyLogo
}

export default useHowLogo