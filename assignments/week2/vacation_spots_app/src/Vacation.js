import React from 'react'

function VacationCards(props) {
    let color = "coral"
    if (props.vacation.timeToGo === "Spring") {
        color = "crimson"
    } else if (props.vacation.timeToGo === "Summer") {
        color = "orchid"
    } else if (props.vacation.timeToGo === "Winter") {
        color = "teal"
    } else if (props.vacation.timeToGo === "Fall") {
        color = "gold"
    }

    let dollarSigns = "$"
    if (props.vacation.price <= 500) {
        dollarSigns = "$"
    } else if (props.vacation.price > 500 && props.spot.price <= 1000) {
        dollarSigns = "$$"
    } else if (props.vacation.price > 1000) {
        dollarSigns = "$$$"
    }

    return (
        <div className="cards" style={{backgroundColor: color}}>
            <h3>{dollarSigns}</h3>
            <h2>{props.vacation.place}</h2>
            <p>Price: {props.vacation.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <p>Best Time To Go: {props.vacation.timeToGo}</p>
        </div>
    )
}

export default VacationCards