import React from "react";
import { LashList } from "../helpers/LashList"
import LashItem from "../Pages/LashItem";

function ShopLashes() {
    return (
        <div className="shoplashes">
            <h1 className="lashesTitle">Our Lashes</h1>
            <div className="lashList">
                {LashList.map((LashList, key) => {
                return (
                <LashList
                key={key}
                 image={LashItem.name} 
                 name={LashItem.name} 
                 price={LashItem.price} 
                 />
            })}
            </div>
        </div>
    );
}

export default ShopLashes;