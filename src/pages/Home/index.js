import React from 'react'
import './home.css'
import {  Gap, Card,} from '../../components'


const Home = () => {
    
    return (
        <div className="content">
            <div>
            <Gap height={150}/>
                Search komponent
            </div>
            <div className="card">
                <Card/>
            </div>
            <div>
                Blog pages
            </div>
            <div>
                Testimonial pages
            </div>
            <Gap height={40}/>
        </div>
    )
}

export default Home
