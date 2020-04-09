import React from 'react'
import pizza from '../../assets/img/loading.svg'
import './loading.scss'

const Loading = () => {
    return (
        <div className="loading">
            <img src={`/assets/img/${pizza}`} alt="loading"/>
        </div>
    )
}

export default Loading