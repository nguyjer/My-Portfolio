import styles from './style.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect } from 'react'

export default function index() {

    const backgroundImage = useRef(null)
    const introImage = useRef(null)
    const introText = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top",
                    end: "+=500px",
                    scrub: true,
                    // markers: true,
                }
            })

            timeline
                .from(backgroundImage.current, { clipPath: "inset(10%)" })
                .to(introImage.current, { height: "200px" }, 0)
        })
        return () => ctx.revert()
    }, [])
    return (
        <div id='intro' className={styles.intro}>
            <div ref={backgroundImage} className={styles.backgroundImage}>
                <Image
                    src={'/images/intro.jpg'}
                    fill={true}
                    alt={'background image'}
                />
            </div>
            <div className={styles.introContainer}>
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                    <Image
                        src={'/images/me.jpg'}
                        fill={true}
                        alt={'background image'}
                    />
                </div>
                <div data-scroll data-scroll-speed="0.7" className={styles.introText}>
                    <h1>Jeremy Nguyen</h1>
                    <h3>Aspiring Software Engineer with passion for Sustainability</h3>
                </div>
            </div>
        </div>
    )
}