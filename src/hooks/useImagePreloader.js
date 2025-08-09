import { useEffect } from 'react';

export function useImagePreloader(imageSources) {
    useEffect(() => {
        const preloadImages = () => {
            imageSources.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };

        const timeoutId = setTimeout(preloadImages, 1000);
        
        return () => clearTimeout(timeoutId);
    }, [imageSources]);
}

export function preloadProjectImages(projects) {
    const imageSources = projects.map(project => `/images/${project.src}`);
    return imageSources;
}