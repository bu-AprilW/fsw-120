import React from "react";

function InfoBox(props) {
    return (
        <div className="info-boxes" style={{backgroundColor: props.backgroundColor}}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    );
}


export default InfoBox;