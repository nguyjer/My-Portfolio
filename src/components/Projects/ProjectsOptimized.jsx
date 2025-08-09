'use client';

import { Suspense, lazy } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProjectsComponent = lazy(() => import('./index'));

function ProjectsPlaceholder() {
    return (
        <div 
            id="projects"
            style={{
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'rgb(157, 174, 117)',
                padding: '4rem 2rem',
            }}
        >
            {/* Empty placeholder that maintains layout */}
        </div>
    );
}

function ProjectsLoader() {
    return (
        <div 
            id="projects"
            style={{
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'rgb(157, 174, 117)',
                padding: '4rem 2rem',
            }}
        >
            Loading projects...
        </div>
    );
}

export default function ProjectsOptimized() {
    const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '100px',
    });

    return (
        <div ref={ref}>
            {hasIntersected ? (
                <Suspense fallback={<ProjectsLoader />}>
                    <ProjectsComponent />
                </Suspense>
            ) : (
                <ProjectsPlaceholder />
            )}
        </div>
    );
}