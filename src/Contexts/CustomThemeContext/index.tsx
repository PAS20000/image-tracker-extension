import * as React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import BreakPoints from '../../Styles/BreakPoints'
import { Dark, Light } from '../../Styles/Theme/index.styles'
import { PropsCTXdefault, SetState } from '../types'

export type ThemeCTX = {
    theme:DefaultTheme | {}
    setTheme:SetState<DefaultTheme>
    ChangeTheme:() => void
}



export const CustomThemeContext = React.createContext<ThemeCTX>({
    theme:{},
    setTheme:() => {},
    ChangeTheme:() => {}
})

const CustomThemeProvider = ({
    children
} : PropsCTXdefault) => {
    const [theme, setTheme] = React.useState(Dark)

    const ChangeTheme = () => {
        if(theme.title === 'dark'){
            setTheme(Light)
            localStorage.setItem('themeImageTracker', 'light')
        } else {
            setTheme(Dark)
            localStorage.setItem('themeImageTracker', 'dark')
        }
    }

    React.useEffect(() => {
        setTheme(localStorage.themeImageTracker === 'dark' ? Dark : Light)
    }, [])
   
   return(
        <CustomThemeContext.Provider value={{theme, setTheme, ChangeTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    )
}
   
export default CustomThemeProvider