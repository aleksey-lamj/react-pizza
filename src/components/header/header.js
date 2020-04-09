import React from 'react'
import './header.scss'
import pizza from '../../assets/img/pizza-logo.svg'

import Cart from './cart'

const Header = ({togglePopup}) => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className='header__logo' src={`./assets/img${pizza}`} alt="pizza logo" />
                <div>
                    <h1>React pizza</h1>
                    <p>Самая вкусная пицца во вселенной</p>
                </div>
            </div>
           <Cart togglePopup={togglePopup}/>
        </div>
    )
}
export default Header