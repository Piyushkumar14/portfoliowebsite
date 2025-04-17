import React, { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'ML Interpretor',
            image: require('../assets/MLinterpretor.webp'),
            problem: "Many machine learning models, especially black-box models like Random Forest and XGBoost, lack interpretability, making it difficult for data scientists to understand their decision-making process. This can hinder debugging, trust, and model fairness.",
            approach: "I built a codeless ML interpreter that allows users to analyze feature importance and identify misclassifications in models. The system integrates SHAP and LIME for interpretability and supports various ML models. Developed using Python and Streamlit, it provides an interactive dashboard where users can upload models and datasets for real-time analysis. Docker was used for seamless deployment and scalability.",
            result: "The tool improved model transparency and debugging efficiency, helping data scientists and ML engineers gain deeper insights into their models. It reduced the time required to debug models by 40% and enhanced trust in model predictions.",
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/ML_Interpretor'
        },
        {
            id: 2,
            title: 'Skin Lesion Classification using CNN',
            image: require('../assets/skin.webp'),
            problem: "arly detection of skin lesions is critical for effective treatment, but manual diagnosis can be time-consuming and prone to human error. An automated classification system can assist dermatologists in identifying skin cancer more efficiently.",
            approach: " Implemented a deep learning-based classification model using Convolutional Neural Networks (CNNs) to analyze and categorize skin lesions. Trained the model on the ISIC2017 dataset, applying data augmentation techniques to improve accuracy. Developed validation and testing scripts using metadata and ground truth CSV for comprehensive model evaluation. Built a Flask-based web application that allows users to upload images for real-time diagnosis.",            
            result: "The model significantly improved early detection accuracy, enhancing diagnostic efficiency for medical professionals. The Flask-based UI provided an accessible platform for quick and reliable skin lesion analysis.",
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/Skincheck'
        },
        {
            id: 3,
            title: 'Music Recommendation System',
            image: require('../assets/music.webp'),
            problem: "Traditional playlist recommendations often fail to personalize music preferences effectively, leading to poor user engagement. A more dynamic, content-based filtering approach is needed to enhance user experience.",
            approach: "Developed a real-time music recommendation system using the Spotify API, analyzing features such as tempo, key, loudness, and genre to suggest similar songs. The system employs content-based filtering, ensuring personalized recommendations. A Streamlit-based UI allows users to input their favorite songs and receive instant recommendations.",
            result: "The model processed over 500 songs dynamically and improved user engagement by 25%. Users could explore music in a more personalized and interactive manner, leading to better retention on the platform.",
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/music_recommemdation_system-using-SpotifyAPI'
        },
        {
            id: 4,
            title: 'Stock Price Predictor',
            image: require('../assets/stock.webp'),
            problem: "Investors struggle with predicting stock prices due to market volatility and complex financial patterns. A reliable predictive model can help in making informed financial decisions.",
            approach: "Developed a stock price forecasting model using a Random Forest regression approach. The model was trained on historical stock data, capturing trends and key indicators. Built a Flask-based web application where users can input stock symbols and receive real-time price predictions and visualization insights.",
            result: "The model achieved 90% accuracy in predicting stock trends, empowering investors with data-driven decision-making. The interactive dashboard enabled users to analyze market trends efficiently, leading to improved financial planning.",
            type: 'Personal',
            github: 'https://github.com/Piyushkumar14/Stock_Market_Predictor_ETE'
        },
        {
            id: 5,
            title: 'Carbon Footprint Forecast',
            image: require('../assets/CO2.webp'),
            problem: "Accurately predicting CO2 emissions is crucial for policymakers and businesses to design effective sustainability strategies. Traditional forecasting models often struggle with capturing long-term trends and fluctuations in emissions data.",
            approach: "Implemented an ARIMA-based time-series forecasting model to predict CO2 emissions with high accuracy. The model was trained on historical emission data and optimized using hyperparameter tuning. Developed an interactive Streamlit dashboard for real-time visualization and analysis, enabling users to explore trends and make data-driven decisions.",
            result: "Achieved a 95% accuracy rate in emission forecasting, helping environmental analysts plan for carbon reduction initiatives. The project improved forecasting precision and provided actionable insights for sustainability planning.",
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
          <div className="project-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-item"
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <span className="project-type">{project.type}</span>
                </div>
              </div>
            ))}
          </div>
    
          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeModal}>
                  &times;
                </button>
                <h2>{selectedProject.title}</h2>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="project-image"
                />
                
                <div className="project-details">
                  <div className="detail-section">
                    <h3>Problem</h3>
                    <p>{selectedProject.problem}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Approach</h3>
                    <p>{selectedProject.approach}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Result</h3>
                    <p>{selectedProject.result}</p>
                  </div>
                </div>
                
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </section>
      );
    };
    
    export default Projects;