import useAuthCTX from "../../Contexts/AuthContext/useAuthCTX"

const useHowLogo = () => {
    const { member } = useAuthCTX()

    const verifyLogo = () => {
        if (member?.signature === 'free') {
          return 'image-tracker-logo-free-09-10-2022.png'
        }
        if (member?.signature === 'gold') {
          return 'image-tracker-logo-gold-09-10-2022.png'
        }
        if (member?.signature === 'platinum') {
          return 'logo-verde.png'
        }
        if (member?.signature === 'diamond' || member?.signature === 'beta tester') {
          return 'image-tracker-logo-diamond-09-10-2022.png'
        }
        if (member?.signature === 'orichalcum') {
          return 'image-tracker-logo-orichalcum-09-10-2022.png'
        }
      }


      return verifyLogo
}

export default useHowLogo