import React from 'react'
import './card.css'
import { ImgProduk } from '../../../assets'

const Card = () => {
    return (
        <div>
            <div className="card-wrapper">
                <img className="image-produk" src={ImgProduk} alt="avatar"/>
                <div className="stok">
                    <p>The Troll's tongue in Hardanger, Norway</p>
                </div>
            </div>
        </div>
    )
}

export default Card
