import React, {Component} from 'react'
import Roll from './Roll.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0,
            border: '',
            history: [],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const random = Math.round(1 + Math.random() * 5);
        let hist = this.state.history
        hist.push(random)
        this.setState({number: random})
        this.setState({border: random + 'px solid yellow'})
    }

    renderHistory() {

    }

    render() {
        return (<div>
            <h1 style={{border:this.state.border}}>{this.state.number}</h1>
            <button onClick = {this.handleClick}>Roll Dice</button>
        </div>)
    }
}

export default App