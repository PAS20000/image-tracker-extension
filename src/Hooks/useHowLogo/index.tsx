import useAuthCTX from "../../Contexts/AuthContext/useAuthCTX"

const useHowLogo = () => {
    const { member } = useAuthCTX()

    const verifyLogo = () => {
        if (member?.signature === 'free') {
          return 'img/logo-vermelho.png'
        }
        if (member?.signature === 'gold') {
          return 'img/logo-gold.png'
        }
        if (member?.signature === 'platinum') {
          return 'img/logo-verde.png'
        }
        if (member?.signature === 'diamond' || member?.signature === 'beta tester') {
          return 'img/logo-diamound.png'
        }
      }


      return verifyLogo
}

export default useHowLogo