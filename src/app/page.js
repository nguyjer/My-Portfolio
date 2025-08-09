'use client'
import styles from "./page.module.css";
import { useEffect } from "react";
import Intro from "../components/Intro"
import Description from "../components/Description"
import ProjectsOptimized from "../components/Projects/ProjectsOptimized"

export default function Home() {
  
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <ProjectsOptimized />
      {/* <div id='projects' className={styles.progressContainer}>
        <h2>Site Work in Progress...</h2>
      </div> */}
    </main>
  );
}
