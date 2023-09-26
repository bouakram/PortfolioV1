import React, { useRef } from 'react'
import styles from './hero.module.scss'
import { motion, useInView } from 'framer-motion'
import { slidUpName, slidUpNickName } from './animate'

function Hero() {
    const container = useRef(null)
    const isInView = useInView(container)
  return (
    <div ref={container} className={styles.hero}>
        <motion.div 
        className={styles.name}
        variants={slidUpName}
        initial='initial'
        animate={isInView ? 'open': 'closed'}
        ><span>BOUGHAZI Akram</span>
        </motion.div>
        <motion.div 
        className={styles.nickname}
        variants={slidUpNickName}
        initial='initial'
        animate={isInView ? 'open': 'closed'}
        ><span>Lunar Dev</span>
        </motion.div>
    </div>
  )
}

export default Hero