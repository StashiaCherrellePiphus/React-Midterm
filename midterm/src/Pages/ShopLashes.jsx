import React from "react";
import { LashList } from "../helpers/LashList"
import LashItem from "../components/LashItem";
import "../styles/LashItem.css";

function ShopLashes() {
    return (
        <div className="shoplashes">
            <h1 className="lashesTitle">Our Lashes</h1>
            <div className="lashList">
                {LashList.map((LashList, key) => {
                return (
                <LashItem
                key={key}
                 image={LashItem.name} 
                 name={LashItem.name} 
                 price={LashItem.price} 
                 />
                );
                })}
            </div>
        </div>
    );
}

export default ShopLashes;