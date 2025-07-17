'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';

export default function index() {
  const [direction, setDirection] = useState('');           // '', 'scroll-up', or 'scroll-down'
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (currentScrollY <= 0) {
        setDirection('');
      } 
      else if (currentScrollY > lastScrollY.current) {
        setDirection('scroll-down');
      } 
      else if (currentScrollY < lastScrollY.current) {
        setDirection('scroll-up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={direction}>
      <header className={styles.header}>
        <h1>Your beautiful goes here!</h1>
      </header>
    </div>
  );
}
