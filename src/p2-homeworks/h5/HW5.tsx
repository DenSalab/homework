import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {BrowserRouter, HashRouter} from "react-router-dom";

function HW5() {
    return (
        <HashRouter basename={'/'}>
                <Header/>
                <Routes/>
        </HashRouter>
    )
}

export default HW5
