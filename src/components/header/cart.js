import React from 'react'
import { connect } from 'react-redux'
import {cart as buttonCart} from '../utils/svg/svg'

const Cart = ({ cart, togglePopup }) => {

    const total = cart.reduce((acc, item) => acc + item.total, 0)

    const countProductInCart = cart.reduce((acc, pr) => acc + pr.count, 0)
    const visibleCart = () => {
        if (cart.length) {
            togglePopup(true)
        }
        return
    }
    return (
        <div className="header__cart" onClick={visibleCart}>
                <button className="button button-cart">
                    <span className='cart-price'>{!!total && total} ₽</span>
                    <div className="dilimiter" />
                    {buttonCart}
                    {!cart.length ? null : <span>{countProductInCart}</span>}
                </button>
        </div>
    )
}
const mapStateToProps = ({ cart }) => {
    return {
        cart
    }
}

export default connect(mapStateToProps)(Cart)