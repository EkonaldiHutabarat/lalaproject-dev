import React from 'react'
import { LoginBg } from '../../assets'
import { Input, Button, Gap, Link, Footer, Menu } from '../../components'
import './login.css'
import {useHistory} from 'react-router-dom'

const Login = (...rest) => {
    const history = useHistory();
    return (
        <div>
            <Menu/>
            <Gap height={150}/>
            <div className="main-page">
                <div className="left">
                    <img src={LoginBg} className="LoginBg" alt="imgLogin"/>
                </div>
                <div className="right">
                    <p className="title">Welcome</p>
                    <Input label="Email" placeholder="Email"/>
                    <Gap height={18}/>
                    <Input label="Password" placeholder="password"/>
                    <Gap height={20}/>
                    <Button title="Login"/>
                    <Gap height={100}/>
                    <Link title="Buat Akun" onClick={()=> history.push('/register')}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login
