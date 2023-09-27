import React from 'react'
import styles from './nav.module.scss'
import { motion } from 'framer-motion'
import { menuslide, slide } from './animate'
import Magnatic from '../magnatic/Magnatic'

function Nav({isActive, setIsActive}) {
    const navItems = [
        {
            title: 'Home',
            href: '#home'
        },
        {
            title: 'About',
            href: '#about'
        },
        {
            title: 'Work',
            href: '#work'
        },
        {
            title: 'Contact',
            href: '#contact'
        }
    ]
  return (
    <motion.div 
    variants={menuslide} 
    animate='enter' 
    exit='exit' 
    initial='initial' 
    className={styles.menu}>
        <div className={styles.body}>
            <div className={styles.nav}>
                <div className={styles.header}>
                    <p className={styles.head}>Navigation</p>
                </div>
                    {
                        navItems.map((items, index)=>{
                            return (
                                <Magnatic>
                                    <motion.a
                                    onClick={()=>setIsActive(!isActive)}
                                    href={items.href}
                                    custom={index}
                                    variants={slide} 
                                    animate='enter' 
                                    exite='exit' 
                                    initial='initial' 
                                    key={index}>
                                        {items.title}
                                    </motion.a>
                                </Magnatic>
                                )
                        })
                    }
            </div>
        </div>
    </motion.div>
  )
}

export default Nav