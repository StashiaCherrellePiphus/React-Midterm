import React from "react";
import { LashList } from '../helpers/LashList';
import LashItem from '../components/LashItem';
import '../styles/LashItem.css';

function ShopLashes() {
    return (
        <div className="shoplashes">
            <h1 className="lashesTitle">Items</h1>
            <div className="lashList">
                {LashList.map((lashList, key) => {
                return (
                <LashItem
                key={key}
                 image={LashItem.image} 
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