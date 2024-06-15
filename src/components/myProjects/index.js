import React, { useState } from "react";
import styles from './myProjects.module.scss';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MyProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'Description for project one.',
            frameworks: ['React', 'Node.js', 'Express'],
            imageUrl: '/images/p-1.jpg',  // Ensure the path is correct
            link: 'https://example.com'
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Description for project two.Description for project two.Description for project two.Description for project two.Description for project two.',
            frameworks: ['Angular', 'Firebase', 'TypeScript'],
            imageUrl: '/images/p-1.jpg',  // Ensure the path is correct
            link: 'https://example.com'
        },
        {
            id: 3,
            title: 'Project Two',
            description: 'Description for project two.',
            frameworks: ['Angular', 'Firebase', 'TypeScript'],
            imageUrl: '/images/p-1.jpg',  // Ensure the path is correct
            link: 'https://example.com'
        },
        {
            id: 4,
            title: 'Project Two',
            description: 'Description for project two.',
            frameworks: ['Angular', 'Firebase', 'TypeScript'],
            imageUrl: '/images/p-1.jpg',  // Ensure the path is correct
            link: 'https://example.com'
        },
        {
            id: 5,
            title: 'Project Two',
            description: 'Description for project two.',
            frameworks: ['Angular', 'Firebase', 'TypeScript'],
            imageUrl: '/images/p-1.jpg',  // Ensure the path is correct
            link: 'https://example.com'
        },
        {
            id: 5,
            title: 'Project Two',
            description: 'Description for project two.',
            frameworks: ['Angular', 'Firebase', 'TypeScript'],
            imageUrl: '/images/p-1.jpg',  // Ensure the path is correct
            link: 'https://example.com'
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div id="projects">
        <h1 className={styles.myProjectsTitle}>My Projects</h1>
        <div className={styles.myProjects}>
            {projects.map((project) => (
                <div key={project.id} className={styles.card} onClick={() => openModal(project)}>
                    <img src={project.imageUrl} alt={project.title} className={styles.cardImage} />
                    <div className={styles.cardTitle}>{project.title}</div>
                </div>
            ))}

            {selectedProject && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <a className={styles.link} href={selectedProject.link}><OpenInNewIcon fontSize="small" /></a>
                        <p>{selectedProject.description}</p>
                        <h3>Frameworks Used</h3>
                        <ul>
                            {selectedProject.frameworks.map((framework, index) => (
                                <li key={index}>{framework}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default MyProjects;
