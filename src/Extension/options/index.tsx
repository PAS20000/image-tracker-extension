import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

const Options = () => {

    return (
       <React.StrictMode>
            <div>
                <h1>Options</h1>
                <img src="logo-vermelho.png" alt="" />
            </div>
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
root.render(<Options />)