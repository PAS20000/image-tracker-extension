import * as React from 'react'

const useWindow = () => {
    const [WindowConfig, setWindowConfig] = React.useState<string>()
    
    React.useEffect(() => {
        setWindowConfig('location=1, toolbar=1, menubar=1, resizable=1, width=464, height=700')
    }, [])

    return {
        WindowConfig
    }
}

export default useWindow