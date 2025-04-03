import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p>Let’s work together! Here’s how you can reach me:</p>
            <div className="contact-methods">
                <a href="mailto:pr14122001@gmail.com" className="btn">Email Me</a>
                <a href="https://linkedin.com/in/piyush-kumar14" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            </div>
        </section>
    );
};

export default Contact;