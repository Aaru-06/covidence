import React from "react";
import "./styles/detailcard/detailcard-style.css";

export default (props) => {
    return (
        <div className="detail-card">
            <div><strong>{props.data.poi.name}</strong></div>
            <hr style={{backgroundColor : "grey"}}/>
            <div>{props.data.address.freeformAddress}</div>
        </div>
    )
}