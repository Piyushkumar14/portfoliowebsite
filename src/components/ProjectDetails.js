import React from 'react';

const ProjectDetails = ({ project, onClose }) => {
    return (
        <div className="project-details-modal">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;