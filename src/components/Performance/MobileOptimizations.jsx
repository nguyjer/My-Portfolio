'use client';

import { useEffect } from 'react';

export default function MobileOptimizations() {
    useEffect(() => {
        // Prevent iOS bounce scroll
        const preventBounce = (e) => {
            const element = e.target;
            let isScrollable = false;
            
            // Check if the element or any parent is scrollable
            let parent = element;
            while (parent && parent !== document.body) {
                if (parent.scrollHeight > parent.clientHeight) {
                    isScrollable = true;
                    break;
                }
                parent = parent.parentElement;
            }
            
            // If not scrollable and at the top/bottom, prevent bounce
            if (!isScrollable) {
                e.preventDefault();
            }
        };

        // Add touch event listeners for iOS
        if (typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
            document.addEventListener('touchmove', preventBounce, { passive: false });
        }

        // Optimize images for mobile
        const optimizeImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach((img) => {
                if (window.innerWidth <= 768 && !img.loading) {
                    img.loading = 'lazy';
                }
            });
        };

        // Run on load and resize
        optimizeImages();
        window.addEventListener('resize', optimizeImages);

        // Mobile viewport height fix
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);

        // Cleanup
        return () => {
            if (typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
                document.removeEventListener('touchmove', preventBounce);
            }
            window.removeEventListener('resize', optimizeImages);
            window.removeEventListener('resize', setVH);
            window.removeEventListener('orientationchange', setVH);
        };
    }, []);

    return null;
}