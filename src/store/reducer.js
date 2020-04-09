export const initialState = {
    products: {
        allProducts: [],
        loading: true
    },
    cart: []
}
const findItem = (state, itemId) =>  state.find(({ id }) => id === itemId)

const updateItem = (oldItem, pr, cart, numCount) => {

    const itemId = cart.length > 0 ? cart[cart.length - 1].id : 2

    if (oldItem) {

        const count = oldItem.count + numCount
        const fin = oldItem.totalPrice * count

        return {
            ...oldItem,
            count,
            total: fin
        }
    }
    return {
        ...pr,
        count: 1,
        id: itemId + 1,
        total: pr.totalPrice
    }
}
const updateCart = (cart, pr, numCount) => {

    const [oldItem] = cart.filter(({ name, dough, size }) => {
        return name == pr.name && dough == pr.dough && size == pr.size
    })
    const idx = cart.findIndex(({ name, dough, size }) => {
        return name == pr.name && dough == pr.dough && size == pr.size
    })
    const newItem = updateItem(oldItem, pr, cart, numCount)

    if (newItem.count === 0) {
        return [
            ...cart.slice(0, idx),
            ...cart.slice(idx + 1)
        ]
    }
    if (oldItem) {
        return [
            ...cart.slice(0, idx),
            newItem,
            ...cart.slice(idx + 1)
        ]
    }
    return [
        ...cart,
        newItem
    ]
}
const addItem = (state, item, numCount) => {
    const newItemInCart = updateCart(state.cart, item, numCount)

    return {
        ...state,
        cart: newItemInCart
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return {
                ...state,
                products: {
                    allProducts: action.payload,
                    loading: false
                }
            }

        case 'ADD_TO_CART':
            return addItem(state, action.payload, 1)

        case 'DEC_TO_CART':
            const productDec = findItem(state.cart, action.payload)
            return addItem(state, productDec, -1)

        case 'INC_TO_CART':
            const productInc = findItem(state.cart, action.payload)
            return addItem(state, productInc, 1)

        case 'REMOVE_FROM_CART':
            const productRem = findItem(state.cart, action.payload)
            return addItem(state, productRem, -productRem.count)

        default:
            return state
    }
}
export default reducer