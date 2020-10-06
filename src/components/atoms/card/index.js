import React from 'react'
import './card.css'
// import {Jagung } from '../../../assets'
// import { Button } from '..'
// import {useHistory} from 'react-router-dom'

const Card =({title, ...rest}) => {
    // const history = useHistory();
    return (
        <div>
            <div className="card-wrapper">
                {/* <img className="image-produk" src={Jagung} alt="padi"/>
                <div className="stok">
                    <p>{title}</p>
                </div>
                <Button title="Pesan" onClick={() => history.push('/register')}/> */}
            </div>
        </div>
    )
}

export default Card
