'use client';

import styles from "./style.module.css";
import { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { projectsData } from "../../data/projects";
import { useImagePreloader, preloadProjectImages } from "../../hooks/useImagePreloader";

function ProjectButton({ project, index, isActive, onClick }) {
    const handleClick = useCallback(() => {
        onClick(index);
    }, [index, onClick]);
    
    return (
        <button
            key={project.id}
            className={`${styles.projectButton} ${isActive ? styles.active : ""}`}
            onClick={handleClick}
            aria-label={`View ${project.title} project`}
        >
            {project.title}
        </button>
    );
}

function ProjectImage({ project, priority = false }) {
    return (
        <div className={styles.imageContainer}>
            <Image
                src={`/images/${project.src}`}
                alt={`${project.title} project screenshot`}
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 900px) 90vw, 800px"
                className={styles.projectImage}
                priority={priority}
                quality={85}
            />
        </div>
    );
}

function ProjectDescription({ project }) {
    return (
        <div className={styles.description}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
    );
}

export default function Projects() { 
    const [selectedProject, setSelectedProject] = useState(0);
    
    const handleProjectSelect = useCallback((index) => {
        setSelectedProject(index);
    }, []);
    
    const currentProject = useMemo(() => {
        return projectsData[selectedProject];
    }, [selectedProject]);
    
    const imageSources = useMemo(() => {
        return preloadProjectImages(projectsData);
    }, []);
    
    useImagePreloader(imageSources);
    return (
        <section id="projects" className={styles.projects} aria-label="Projects showcase">
            <nav className={styles.sidebar} aria-label="Project navigation">
                {projectsData.map((project, idx) => (
                    <ProjectButton
                        key={project.id}
                        project={project}
                        index={idx}
                        isActive={selectedProject === idx}
                        onClick={handleProjectSelect}
                    />
                ))}
            </nav>
            <div className={styles.projectContent} role="main" aria-live="polite">
                <ProjectImage 
                    project={currentProject} 
                    priority={selectedProject === 0}
                />
                <ProjectDescription project={currentProject} />
            </div>
        </section>
    );
}