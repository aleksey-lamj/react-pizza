export const productsLoaded = item => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: item
    }
}

export const addToCart = product => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}
export const decToCart = id => {
    return {
        type: 'DEC_TO_CART',
        payload: id
    }
}
export const incToCart = id => {
    return {
        type: 'INC_TO_CART',
        payload: id
    }
}
export const removeFromCart = id => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}