import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'

import { Provider } from 'react-redux'
import { PizzaServiceContext } from './components/hoc/with-pizza-context'
import ServicePizza from './service/service-pizza'
import store from './store/store'
import ErrorPage from './components/error/error-page/error-page'

const servicePizza = new ServicePizza()

ReactDOM.render(
    <Provider store={store}>
        <ErrorPage>
            <PizzaServiceContext.Provider value={servicePizza}>
                <App />
            </PizzaServiceContext.Provider>
        </ErrorPage>
    </Provider>,
    document.getElementById('root'))