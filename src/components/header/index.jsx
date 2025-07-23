'use client';

import React from 'react';
import styles from './style.module.css';

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button className={styles.logo} onClick={() => scrollToSection('intro')}>Jeremy Nguyen</button>
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={() => scrollToSection('about')}>About</button>
          <button className={styles.navButton} onClick={() => scrollToSection('projects')}>Projects</button>
          <button className={styles.navButton}>Experience</button>
        </div>
      </nav>
    </header>
  );
}
