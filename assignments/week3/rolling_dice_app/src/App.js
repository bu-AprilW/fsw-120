import React from "react"
import Dice from './Dice.js'



class App extends React.Component {
  render() {
    return (
      <div className = 'App'>
        <Dice />

        <div>
          <h1>Roll the Dice!</h1>
        </div>
      </div>
    )
  }
}


export default App