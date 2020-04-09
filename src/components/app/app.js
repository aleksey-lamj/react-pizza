import React, { useState } from 'react'
import '../../scss/index.scss'


import PizzaListContainer from '../pizza-list/pizza-list'
import Header from '../header/header'
import ProductsInCart from '../products-in-cart.js/products-in-cart'
import Categories from '../categories/categories'

const App = () => {

    const [popup, setPopup] = useState(false)

    const togglePopup = (boolean) => {
        setPopup(boolean)
        document.body.style.overflowY = popup ? 'auto' : 'hidden'
    }

    const [category, setCategory] = useState()
    
    const toggleCategory = (str) => {
        setCategory(str)
    }

    return (
        <div className='wrapper'>
            <Header togglePopup={togglePopup} />
            <Categories toggleCategory={toggleCategory}/>
            <PizzaListContainer category={category}/>
            <ProductsInCart popup={popup} togglePopup={togglePopup} />
        </div>
    )
}
export default App