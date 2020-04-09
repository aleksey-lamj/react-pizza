import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withPizzaContext } from '../hoc/with-pizza-context'
import { productsLoaded } from '../../store/actions'
import Loading from '../loading/loading'
import PizzaItem from '../pizza-item/pizza-item'

import './pizza-list.scss'

const PizzaListContainer = (props) => {

    const {
        products,
        productsLoaded,
        pizzaService,
        category
    } = props

    useEffect(() => {
        pizzaService.getAll().then(data => productsLoaded(data))
    }, [])

    if (products.loading) {
        return <Loading />
    }
    return (
        <PizzaList products={products.allProducts} category={category} />
    )
}
const PizzaList = ({ products, category }) => {

    const [list, setList] = useState(products)

    useEffect(() => {
        const filtProduct = products.filter((item) => {
            if (category.prop === 'all') {
                return item
            }
            if (item.categories.includes(category.prop)) {
                return item
            }
        })
        setList(filtProduct)
    }, [category])

    return (
        <div className="pizza-wrapper">
            <h2>{category.label} пиццы</h2>
            {list.map((item) => {
                return (
                    <PizzaItem key={item.id} item={item} />
                )
            })}
        </div>
    )
}
const mapStateToProps = ({ products }) => {
    return {
        products
    }
}
const mapDispatchToProps = {
    productsLoaded
}
export default connect(mapStateToProps, mapDispatchToProps)
    (withPizzaContext()(PizzaListContainer))
