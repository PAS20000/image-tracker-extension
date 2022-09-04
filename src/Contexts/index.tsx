import * as React from 'react'
import AuthProvider from './AuthContext'
import CustomThemeProvider from './CustomThemeContext'
import LiveStorageProvider from './LiveStorageContext/indext'
import PortalProvider from './PortalContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <AuthProvider>
            <CustomThemeProvider>
                <LiveStorageProvider>
                    <PortalProvider>
                        {children}
                    </PortalProvider>
                </LiveStorageProvider>
            </CustomThemeProvider>
        </AuthProvider>
    )
}

export default GlobalProvider