import React, { useRef } from 'react'
import styles from './about.module.scss'
import { motion, useInView } from 'framer-motion'
import { slidup } from './animate'

function About() {
    const phrase ="Hello! I'm BOUGHAZI Akram, a passionate and adaptable full-stack MERN developer with a love for React Native. My freelancing journey has exposed me to diverse projects, from crafting robust back-end APIs to creating engaging front-end experiences. I'm not just a developer; programming is my passion. I thrive on challenges and constant learning. Whether it's diving into new tech stacks, tackling complex problems, or staying current with trends, I'm always eager to grow. Adaptability is my strength. I excel in various environments, seamlessly transitioning between tasks. Whether working independently or within a team, my commitment to delivering top-notch results remains unwavering."

    const container = useRef(null)
    const isInView = useInView(container)
  return (
    <div id='about' ref={container} className={styles.about}>
        <div className={styles.body}>
            <p>
                {
                    phrase.split(' ').map((word, index)=>{
                        return (
                            <spanp key={index} className={styles.mask}><motion.span 
                            className={styles.aboutsectionone}
                            variants={slidup}
                            initial='initial'
                            animate={isInView ? 'open' : 'close'}
                            custom={index}
                            >
                                {word}
                            </motion.span></spanp>
                            )
                        })
                    }
            </p>
        </div>
    </div>
  )
}

export default About