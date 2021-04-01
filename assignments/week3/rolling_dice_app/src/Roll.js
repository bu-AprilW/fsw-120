import React from 'react'

class Roll extends React.Component {
    constructor(props) {
        super(props)
        console.log("--- class Roll extends R...")
    }
    handleClick() {
        console.log("handleClick()")
    }

    render() {
        return (
            <div>Roll()</div>
        )}
}

export default Roll