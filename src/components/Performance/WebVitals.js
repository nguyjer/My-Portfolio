'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
    useReportWebVitals((metric) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(metric);
        }
        
        // You can also send to analytics service
        // analytics.track('Web Vital', metric);
    });
    
    return null;
}