import React, { Component } from 'react'

class Tweet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweet: "",
            author: "",
            picture: "",
            details: ""
        }
    }
}