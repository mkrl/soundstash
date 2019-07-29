import React from 'react'
import { Reset } from 'styled-reset'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            thing: null
        }
    }

    componentDidMount() {
        console.log('mounted')
    }

    render() {
        return (
            <React.Fragment>
                <Reset />
                <h1>Hello</h1>
            </React.Fragment>
        )
    }
}

export default App