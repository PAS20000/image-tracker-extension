import * as React from 'react'
import GlobalProvider from '../Contexts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from '../Styles/Global/index.styles'
import Home from './Home'
import Login from './Login'

const App = () => {
    return(
        <Router>  
            <GlobalProvider>
                <GlobalStyle />
                    <Routes>
                        <Route path='/' element={ <Login /> } />
                        <Route path='/popup.html' element={ <Home /> } />
                        <Route path='*' element={ <Login /> } />
                    </Routes>
            </GlobalProvider>
        </Router>
    )
}

export default App