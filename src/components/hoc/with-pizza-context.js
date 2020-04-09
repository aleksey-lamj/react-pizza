import React, {useContext} from 'react'

export const PizzaServiceContext = React.createContext()

export const withPizzaContext = () => (Component) => {
    return (props) => {

        const pizzaService = useContext(PizzaServiceContext)
        
        return (
            <Component {...props} pizzaService={pizzaService}/>
        )
    }
}