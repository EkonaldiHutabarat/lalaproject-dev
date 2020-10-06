import React from 'react'
import './header.css'
import Menu from '../Menu';
import {useHistory} from 'react-router-dom'
const Header = (...rest) => {
    const history = useHistory();
    return (
        <div className="header">
            <p className="logo-app">Fresgraduate.id </p>
            <Menu/>
            <p className="login" onClick={()=> history.push('/login')}>Login</p>
            <p className="daftar" onClick={()=> history.push('/register')}>Daftar</p>
        </div>
    )
}

export default Header
