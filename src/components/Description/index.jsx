import styles from './style.module.css'
import { use, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function index() { 
    // const phrases = [
    //     "I am a passionate software engineer with a strong commitment to sustainability and environmental conservation.",
    //     "My goal is to leverage technology to create innovative solutions that address pressing environmental challenges.",
    //     "I believe that through collaboration and creativity, we can develop software that not only meets user needs but also promotes eco-friendly practices.",
    //     "With a background in computer science and a deep understanding of environmental issues, I am dedicated to making a positive impact on the world through my work.",
    //     "I am excited to connect with like-minded individuals and organizations who share my vision for a more sustainable future."
    // ]
    const phrases = ["hello", "my name is jeremy", "i am a software engineer", "My goal is to leverage technology", "to create innovative solutions", "that address pressing environmental challenges.",
    ]
    return (
        <div id="about" className={styles.description}>
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({ children }) {
    const text = useRef(null)
    useLayoutEffect(() => {
        // gsap animation here
        gsap.registerPlugin(ScrollTrigger)

        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
            },
            left: "-200px",
            opacity: 0,
        })
    }, [])
    return (
        <p ref={text}>{children}</p>
    )
}