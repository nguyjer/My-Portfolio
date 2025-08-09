import styles from "./style.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Projects() { 
    const [selectedProject, setSelectedProject] = useState(0);
    const projects = [
        {
            title: "PalestineWatch", src: "PalestineWatch.png", description: "A web application that provides resources and information about the Palestinian cause.",
        },
        {
            title: "JoinMe App", src: "JoinMeApp.png", description: "A mobile app that connects friends for social activities and events.",
        },
        {
            title: "Catify", src: "Catify.png", description: "A fun web app that generates hand-drawn cat images based on user's spotify data"
        },
        {
            title: "Portfolio Website", src: "portfolio.png", description: "A personal creative portfolio website to showcase my projects and skills."
        },
        {
            title: "Kernel w/ AC97 Audio Driver", src: "KernelDevelopment.png", description: "Implemented AC97 audio driver in a custom OS kernel, enabling sound playback and recording capabilities."
        }
    ];
    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.sidebar}>
                {projects.map((project, idx) => (
                    <button
                        key={project.title}
                        className={`${styles.projectButton} ${selectedProject === idx ? styles.active : ""}`}
                        onClick={() => setSelectedProject(idx)}
                    >
                        {project.title}
                    </button>
                ))}
            </div>
            <div className={styles.projectContent}>
                <div className={styles.imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        className={styles.projectImage}
                    />
                </div>
                <div className={styles.description}>
                    <h2>{projects[selectedProject].title}</h2>
                    <p>{projects[selectedProject].description}</p>
                </div>
            </div>
        </div>
    );
}