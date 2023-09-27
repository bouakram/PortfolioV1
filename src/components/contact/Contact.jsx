import React, { useRef } from 'react'
import styles from './contact.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import Magnatic from '../magnatic/Magnatic'
import {BiCopyright, BiLogoGithub, BiLogoTwitter, BiLogoLinkedin} from 'react-icons/bi'

function Contact() {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["0 1","1 1"]
    })
    const x = useTransform(scrollYProgress, [0.35, 1], [200, 0])
    const x1 = useTransform(scrollYProgress, [0.8, 1], [-100, 0])
    
  return (
    <div id='contact' ref={container} className={styles.contact}>
        <div className={styles.title}>
            <p>Let's WORK together</p>
        </div>

        <div className={styles.contactcontainer}>
            <Magnatic>
                <motion.span style={{x}} className={styles.contactbutton}>Get In Tuch</motion.span>
            </Magnatic>
        </div>

        <motion.div style={{x: x1}} className={styles.contactinfo}>
                <p>spanboughazi.akram.97@gmail.com</p>
                <p>+213676178342</p>
        </motion.div>

        <dir className={styles.footer}>
            <div className={styles.copy}>
                <BiCopyright /> <p>2023</p>
            </div>
            <div className={styles.social}>
                <Magnatic>
                    <a href="https://github.com/bouakram" target='_blank'><BiLogoGithub /></a>
                </Magnatic>
                <Magnatic>
                    <a href="https://twitter.com/Boughazi_" target='_blank'><BiLogoTwitter /></a>
                </Magnatic>
                <Magnatic>
                    <a href="https://www.linkedin.com/in/akram-boughazi-b3956a212/" target='_blank'><BiLogoLinkedin /></a>
                </Magnatic>
            </div>
        </dir>
    </div>
  )
}

export default Contact