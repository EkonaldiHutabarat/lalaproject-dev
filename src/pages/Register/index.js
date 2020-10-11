import React from 'react'
import './register.css'
import { RegisterBg } from '../../assets'
import {useHistory} from 'react-router-dom'
import { Input, Button, Gap, Link, Footer, Menu } from '../../components'

const Register = ({...rest}) => {
    const history = useHistory();
    return (
        <div>
            <Menu/>
            <Gap height={200}/>
            <div className="main-page">
                <div className="left">
                    <img src={RegisterBg} className="RegisterBg" alt="imgRegister"/>
                </div>
                <div className="right">
                    <p className="title">Form Register</p>
                    <Input label="Name" placeholder="Full Name"/>
                    <Gap height={18}/>
                    <Input label="Email" placeholder="Email"/>
                    <Gap height={18}/>
                    <Input label="Password" placeholder="password"/>
                    <Gap height={20}/>
                    <Button title="Register"/>
                    <Gap height={100}/>
                    <Link title="Kembali ke Login" onClick={() => history.push('/login')}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Register