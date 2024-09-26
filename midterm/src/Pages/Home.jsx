import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../images/backgroundImage';

function Home() {
    return(
        <div className='home'>
            <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
                <h1>Stashia Lashes</h1>   
                <p>Every Style To Fit Your Day!</p> 
                <Link to="/menu">
                <button>PLACE YOUR ORDER TODAY</button> 
                </Link>
         </div>
        </div>
    ) {
        
    }
};

export default Home;