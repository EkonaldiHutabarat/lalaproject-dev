import React from 'react'
import './menu.css'
import {useHistory} from 'react-router-dom'


// const menuToggle = document.querySelector('.menu-toggle input');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', function(){
//     nav.classList.toggle('slide');
// })
const Menu = ({...rest}) =>  {
    const history = useHistory();
    return (
        <div>
            <nav>
                <div className="logo">
                    <h4>Fresgraduate.id</h4>
                </div>

                <ul>
                    <li><a onClick={()=>history.push('/')}>Home</a></li>
                    <li><a onClick={()=>history.push('/')}>Perusahaan</a></li>
                    <li><a>Pusat Karir</a></li>
                    <li><a>About</a></li>

                </ul>
                <button className="masuk">Masuk</button>
                <button className="daftar">Daftar</button>

                <div className="menu-toggle">
                <input type="checkbox"></input>
                   <span></span>
                   <span></span>
                   <span></span> 
                </div>

            </nav>
        </div>
    )
}

export default Menu
