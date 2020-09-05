import React from 'react'
import './register.css'
import { RegisterBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'

const Register = () => {
    return (
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
                <Link title="Kembali ke Login"/>
            </div>
        </div>
    )
}

export default Register