import reducer, { initialState } from './reducer'
import * as t from './actions'

describe('reducer', () => {

  it('PRODUCTS_LOADED', () => {

    const action = t.productsLoaded([1, 2, 3])

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      products: {
        allProducts: action.payload,
        loading: false
      }
    })
  })
})