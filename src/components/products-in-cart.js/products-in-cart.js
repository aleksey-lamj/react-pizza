import React from 'react'
import { basketButton, incButton, decButton, closeButton } from '../utils/svg/svg'
import { connect } from 'react-redux'
import { decToCart, incToCart, removeFromCart } from '../../store/actions'
import './products-in-cart.scss'

const ProductsInCart = ({ cart, popup, togglePopup, decToCart, incToCart, removeFromCart }) => {

    const total = cart.reduce((acc, item) => acc + item.total, 0)
    return (
        popup &&
        <div className='popup' >
            <div className='overlay' onClick={() => togglePopup(false)} />

            <div className='wrapper popup-wrapper'>
                <div className='total-price'>
                    <span>Стоимость заказа: {total} ₽</span>
                    <button className="hide" onClick={() => togglePopup(false)}>
                        {closeButton}
                    </button>
                </div>
                <div className='product-wrap'>

                    {cart.map(item => {
                        return <ProductCart key={item.id}
                            product={item}
                            decToCart={decToCart}
                            incToCart={incToCart}
                            removeFromCart={removeFromCart} />
                    })}

                </div>
            </div>
        </div>
    )
}
const ProductCart = ({ product, decToCart, incToCart, removeFromCart }) => {

    const { id, name, dough, size, count, image, total } = product

    return (
        <div className='product-cart'>
            <img src={image} alt="product" />
            <div className='order-info'>
                <h2>{name} </h2>
                <button className='del-product'
                    onClick={() => removeFromCart(id)}>
                    {basketButton}</button>
                <span>Teсто: {dough}</span>
                <span>Размер: {size}</span>
                <div className='count'>

                    <button onClick={() => decToCart(id)}>{decButton}</button>
                    <span>{count}</span>
                    <button onClick={() => incToCart(id)}>{incButton}</button>

                </div>
                <span className='order-price'>Итого: {total} ₽</span>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart }) => {
    return {
        cart
    }
}
const mapDispatchToProps = {
    decToCart,
    incToCart,
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInCart)