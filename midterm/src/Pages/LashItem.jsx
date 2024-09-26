import React from "react";

function LashItem({ image, name, price }) {
    return (
        <div className="lashitem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> ${price} </p>
        </div>
    );
}

export default LashItem;