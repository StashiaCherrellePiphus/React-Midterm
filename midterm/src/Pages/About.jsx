import React from 'react'
import Picture from "../images/stashia.jpg";
import "../styles/About.css";

function About () {
    return(
        <div className='about'>
            <div
             className="aboutTop" 
             style={{ backgroundImage: `url(${Picture})` }}
             ></div>
            <div className="aboutBottom">
                <h1>ABOUT ME</h1>
                <p>Hello, my name is Stashia Piphus. Im 35 years old, a fulltime web developer student in which i build this website you currently on. I'm a mother of a 16 year old amazing son and I also work a fulltime job while trying to build this small business. My job is to serve you in the best way possible while making you beautiful and happy at the same time. You will please with my services and products. If there something you looking for in particular and its not available plesase reach out to me and I will get it for you. Thanks for viewing my site today. Dont wait any longer go make you purchase now and get your eyes popping from the best in the game!</p>
            </div>
        </div>
    );
        
};

export default About;