import React from 'react';
// import CV from '/Piyush_ATS_Resume.pdf'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem'
            }}>
                <h1>Piyush Kumar</h1>
                <p>Data Scientist | ML Engineer | Available for Freelance Projects</p>
                {/* <a href="#contact" className="btn">Hire Me</a> */}
                <a href="/Piyush_ATS_Resume.pdf" download className="btn btn-outline">Download CV</a>
            </div>
        </section>
    );
};

export default Hero;