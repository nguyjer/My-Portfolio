export const projectsData = [
    {
        id: 'palestinewatch',
        title: "PalestineWatch", 
        src: "PalestineWatch.png", 
        description: "A web application that provides resources and information about the Palestinian cause.",
        technologies: ["Next.js", "PostgreSQL", "Python", "AWS", "Flask"],
        category: "Web Application"
    },
    {
        id: 'joinme-app',
        title: "JoinMe App", 
        src: "JoinMeApp.png", 
        description: "A mobile app that connects friends for social activities and events.",
        technologies: ["Swift", "Firebase", "XCode"],
        category: "Mobile Application"
    },
    {
        id: 'catify',
        title: "Catify", 
        src: "Catify.png", 
        description: "A fun web app that generates hand-drawn cat images based on user's spotify data",
        technologies: ["Node.js", "Spotify API"],
        category: "Web Application"
    },
    {
        id: 'portfolio-website',
        title: "Portfolio Website", 
        src: "portfolio.png", 
        description: "A personal creative portfolio website to showcase my projects and skills.",
        technologies: ["Next.js"],
        category: "Web Application"
    },
    {
        id: 'kernel-development',
        title: "Kernel w/ AC97 Audio Driver", 
        src: "KernelDevelopment.png", 
        description: "Implemented AC97 audio driver in a custom OS kernel, enabling sound playback and recording capabilities.",
        technologies: ["C", "Assembly", "OS Development"],
        category: "Systems Programming"
    }
];

export function getProjectsData() {
    return projectsData;
}

export function getProjectById(id) {
    return projectsData.find(project => project.id === id);
}