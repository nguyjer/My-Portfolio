import { getProjectsData } from "../../data/projects";
import Projects from "./index";

export default function ProjectsServer() {
    const projects = getProjectsData();
    
    return <Projects initialProjects={projects} />;
}

export async function getStaticProps() {
    const projects = getProjectsData();
    
    return {
        props: {
            projects,
        },
        revalidate: 3600,
    };
}