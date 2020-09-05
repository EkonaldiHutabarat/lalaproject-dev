import React from 'react'
import './home.css'
import { Card, Gap } from '../../components'

const Home = () => {
    return (
        <div>
            <Gap height={40}/>
            <div className="container">
                <Card/>
                <Card/> 
                <Card/>    
            </div>
            <Gap height={40}/>
        </div>
    )
}

export default Home
