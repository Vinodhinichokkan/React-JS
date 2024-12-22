import React from 'react'


import Navbar from './Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const App = () => {
   return <React.Fragment>
            <Router>
                <Navbar/>
            </Router>
        </React.Fragment>
}

export default App