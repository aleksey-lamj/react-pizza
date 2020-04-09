import React, { useState, useEffect, Fragment } from 'react'

const RadioButton = ({ list, property, changeProp, name, id }) => {
    let active = ''

    for (let i = 0; i < list.length; i++) {
        if (property.includes(list[i].prop)) {
            active = list[i].label
            break;
        }
    }
    const [state, setState] = useState(active)

    const handleChange = e => setState(e.target.value)

    useEffect(() => {
        changeProp(state, name)
    }, [state])

    return (
        <Fragment>
            {list.map(({ label, prop }) => {

                const findProp = property.includes(prop)
                const inputId = `${id}:${prop}`
                return (
                    <label key={prop}
                        className={!findProp ? 'disable' : state === label ? 'active' : null}
                        htmlFor={inputId}>
                        {label}
                        <input
                            type="radio" id={inputId}
                            name={name}
                            value={label}
                            onChange={handleChange}
                            checked={state === label}
                            disabled={!findProp}
                            hidden />
                    </label>
                )
            })}
        </Fragment>
    )

}
export default RadioButton