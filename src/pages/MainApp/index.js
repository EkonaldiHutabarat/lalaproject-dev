import React from 'react'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom/cjs/react-router-dom.min'
import Createblog from '../Createblog'
import Detailblog from '../Detailblog'
import Home from '../Home'
import { Header, Footer } from '../../components'
import './mainApp.css'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <div className="header-wrapper">
                <Header/> 
            </div>
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-blog">
                            <Createblog/>
                        </Route>
                        <Route path="/detail-blog">
                            <Detailblog/>
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
    )
}

export default MainApp