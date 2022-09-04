import * as React from 'react'
import { CustomThemeContext } from '..'

const useCustomThemeCTX = () => {
    const { ChangeTheme, setTheme, theme } = React.useContext(CustomThemeContext)

    return {
        ChangeTheme, 
        setTheme, 
        theme
    }
}

export default useCustomThemeCTX