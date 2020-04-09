import React, { useState, useEffect } from 'react'
import './categories.scss'

const Categories = ({ toggleCategory }) => {
    const [activeCategory, setActiveCategory] = useState({
        label: 'Все',
        prop: 'all'
    })

    useEffect(() => {
        toggleCategory(activeCategory)
    }, [])

    const category = [
        {
            prop: 'all',
            label: 'Все'
        },
        {
            prop: 'meat',
            label: 'Мясные'
        },
        {
            prop: 'vega',
            label: 'Вегетарианские'
        },
        {
            prop: 'grill',
            label: 'Гриль'
        },
        {
            prop: 'hot',
            label: 'Острые'
        },
        {
            prop: 'sweetness',
            label: 'Сладкие'
        }
    ]
    const handleList = (item) => {
        setActiveCategory(item)
        toggleCategory(item)
    }
    return (
        <div className='categories'>
            <hr />
            <ul>
                {category.map((item) => {
                    return (
                        <li key={item.prop}
                            className={activeCategory.prop === item.prop ? 'active' : null}
                            onClick={() => handleList(item)}>
                            {item.label}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Categories