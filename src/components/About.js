import React from 'react';
import YourPhoto from '../assets/your-photo.png'; // Replace with your photo path
// import Signature from '../assets/signature.png'; // Replace with your signature image path

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>I am a results-driven Data Scientist and Machine Learning Engineer with a passion for building intelligent systems that drive real-world impact. With expertise in Python, deep learning, NLP, and full-stack development, I create AI-powered solutions that optimize efficiency and unlock data-driven insights. My work spans predictive modeling, recommendation systems, and scalable web applications, always built with precision and innovation.</p>
                <p>Beyond technical expertise, I bring a mindset of discipline, strategy, and resilience—qualities honed through both my professional journey and strength training. I believe in continuous growth, whether it’s pushing the limits in machine learning or refining my craft through relentless learning and execution.
                I don’t just solve problems—I engineer solutions that stand out.</p>
                <p>Piyush Kumar</p>
                {/* <div className="signature">
                        <img src={Signature} alt="Your Signature" />
                    </div> */}
                </div>
                <div className="about-image">
                    <img src={YourPhoto} alt="Your Name" />
                </div>
            </div>
        </section>
    );
};

export default About;