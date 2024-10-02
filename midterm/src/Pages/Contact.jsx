import React from 'react'
import Eyeleft from '../images/eyeleft.webp';
import '../styles/Contact.css';

function Contact () {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${Eyeleft})` }}></div>
            <div className="rightSide">
                <h1>CONTACT ME</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name.." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email.." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter message.." name="message" required></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    )
};


export default Contact;