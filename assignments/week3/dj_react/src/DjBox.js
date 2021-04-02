import React from "react"
import Square from "./Square"
import "./DjBox.css"



class DjBox extends React.Component {
    constructor() {
        super()
        this.state = {
            color1: 'white',
            color2: 'white',
            color3: 'white',
            color4: 'white',
            border: "2px solid black",
            height:  200,
            width: 200,
            
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
        this.handleClick7 = this.handleClick7.bind(this)
        this.handleClick8 = this.handleClick8.bind(this)
    }

    handleClick1() {
        if (this.state.color1 === 'white') {
            this.setState( () => {
                return {
                    color1: 'black',
                    color2: 'black',
                    color3: 'black',
                    color4: 'black'
                }
            })
        } else {
            this.setState( () => {
                return {
                color1: 'white',
                color2: 'white',
                color3: 'white',
                color4: 'white'
                }
            })
        } 
    }

    handleClick2() {
        this.setState(() => {
            return {
                color1: 'purple',
                color2: 'purple'
            }
        })
    }

    handleClick3() {
        this.setState( () => {
            return {
                color3: 'blue'
            }
        })
    }

    handleClick4() {
        this.setState( () => {
            return {
                color4: 'blue'
            }
        })
    }

    handleClick5() {
        this.setState( () => {
            return {
                color4: 'gray'
            }
        })

    }

    handleClick6() {
        this.setState( () => {
            return {
                color4: 'green'
            }
        })

    }

    handleClick7() {
        this.setState( () => {
            return {
                color4: 'red'
            }
        })
    }

    handleClick8() {
        this.setState( () => {
            return {
                color4: 'orange'
            }
        })

    }

    render() {
        return (
            <div className="style">

                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.color1}} />
                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.color2}}/>
                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.color3}}/>
                <Square style={{border: this.state.border, height: this.state.height, width: this.state.width,  backgroundColor: this.state.color4}}  />

                <p><button onClick={this.handleClick1}>Click1</button></p>
                <p><button onClick={this.handleClick2}>Click2</button></p>
                <p><button onClick={this.handleClick3}>Click3</button></p>
                <p><button onClick={this.handleClick4}>Click4</button></p>
                <p><button onClick={this.handleClick5}>Click5</button></p>
                <p><button onClick={this.handleClick6}>Click6</button></p>
                <p><button onClick={this.handleClick7}>Click7</button></p>
                <p><button onClick={this.handleClick8}>Click8</button></p>
            </div>
    )};
 }

export default DjBox