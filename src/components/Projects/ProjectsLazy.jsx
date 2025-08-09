'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ProjectsComponent = dynamic(() => import('./index'), {
    loading: () => (
        <div className="projects-loading" style={{
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: 'rgb(157, 174, 117)'
        }}>
            Loading projects...
        </div>
    ),
    ssr: false,
});

export default function ProjectsLazy() {
    return (
        <Suspense fallback={
            <div className="projects-loading" style={{
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'rgb(157, 174, 117)'
            }}>
                Loading projects...
            </div>
        }>
            <ProjectsComponent />
        </Suspense>
    );
}