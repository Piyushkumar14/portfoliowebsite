import React, { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'ML Interpretor',
            image: require('../assets/MLinterpretor.webp'),
            description: 'Developed a codeless tool to interpret black-box models like Random Forest and XGBoost, improving model transparency and debugging efficiency. Integrated feature importance insights and misclassification analysis to help data scientists understand model behavior. Built using Python, Streamlit, and Docker for seamless deployment.',
            type: 'Freelance',
            github: 'https://github.com/Piyushkumar14/ML_Interpretor'
        },
        {
            id: 2,
            title: 'Skin Lesion Classification using CNN',
            image: require('../assets/skin.webp'),
            description: 'Implemented a deep learning model for skin lesion classification using CNNs, improving early detection accuracy. Trained on the ISIC2017 dataset with data augmentation and validated using metadata analysis. Developed a Flask-based web app for real-time diagnosis and visualization.',
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/Skincheck'
        },
        {
            id: 3,
            title: 'Music Recommendation System',
            image: require('../assets/music.webp'),
            description: 'Enhanced user engagement by 25% with a real-time music recommendation system powered by the Spotify API. Processed over 500 songs dynamically based on genre, tempo, and user preferences using content-based filtering. Built an intuitive Streamlit interface for an interactive user experience.',
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/music_recommemdation_system-using-SpotifyAPI'
        },
        {
            id: 4,
            title: 'Stock Price Predictor',
            image: require('../assets/stock.webp'),
            description: 'Developed a stock price forecasting model with 90% accuracy, empowering investors with data-driven financial decisions. Used a Random Forest model to predict trends and built a Flask-based web app for real-time insights. Integrated financial data visualization for better market analysis.',
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/Stock_Market_Predictor_ETE'
        },
        {
            id: 5,
            title: 'Carbon Footprint Forecast',
            image: require('../assets/CO2.webp'),
            description: 'Designed a predictive model achieving 95% accuracy in CO2 emission forecasting, assisting environmental analysts in sustainability planning. Implemented an ARIMA-based model with a Streamlit dashboard for interactive visualization. Optimized data analysis workflows to improve forecasting precision.',
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/carbon_footprint_forecast'
        },
        // Add more projects as needed
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-grid" style={{
      '--min-column-width': '300px',
      '--grid-gap': '2rem'
    }}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-item"
                        onClick={() => handleProjectClick(project)}
                    >
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p className="project-type">{project.type}</p>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {selectedProject && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeModal}>
                            &times;
                        </button>
                        <h2>{selectedProject.title}</h2>
                        <img src={selectedProject.image} alt={selectedProject.title} />
                        <p><strong>Type:</strong> {selectedProject.type}</p>
                        <p>{selectedProject.description}</p>

                        {/* Add GitHub link section */}
                        {selectedProject.github && (
                            <div className="github-link">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn github-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;