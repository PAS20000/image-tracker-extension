import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import styled from 'styled-components'

const Rotate = styled.img`
    @keyframes Rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    animation: 0.5s Rotate infinite;
    width: 256px;
    height: 256px;
`

const Options = () => {

    return (
       <React.StrictMode>
            <div>
                <Rotate src="logo-vermelho.png" alt="" />
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