import React from 'react'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom/cjs/react-router-dom.min'
import Createblog from '../Createblog'
import Detailblog from '../Detailblog'
import Home from '../Home'
import {Footer, Menu } from '../../components'
import './mainApp.css'
import Perusahaan from '../Perusahaan'

const MainApp = () => {
    return (
        <div className="container">
            {/* <Header/>  */}
            <Menu/>
            <div className="main-app-wrapper">
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-blog">
                            <Createblog/>
                        </Route>
                        <Route path="/detail-blog">
                            <Detailblog/>
                        </Route>
                        <Route path="/perusahaan">
                            <Perusahaan/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
    </div>
    )
}

export default MainApp