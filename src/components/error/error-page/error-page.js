import React, { Component } from 'react'
import ErrorComponent from '../error-component/error-comp'

export default class ErrorPage extends Component {
    state = {
        error: false
    }
    componentDidCatch() {
        this.setState({ error: true })
    }
    render() {
        return this.state.error ? <ErrorComponent /> : this.props.children
    }
}