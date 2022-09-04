import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from '../../Pages'

const Render = () => {

    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

const Root = document.createElement('div')
Root.id = 'root'
const Portal = document.createElement('div')
Portal.id = 'portal'
document.body.append(Portal)
document.body.append(Root)
const root = ReactDOM.createRoot(Root)
root.render(<Render />)