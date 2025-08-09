'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            if (entry.isIntersecting && !hasIntersected) {
                setHasIntersected(true);
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options,
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [hasIntersected, options]);

    return [ref, isIntersecting, hasIntersected];
}