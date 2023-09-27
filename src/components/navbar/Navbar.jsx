import React, { useLayoutEffect, useRef } from 'react'
import styles from './navbar.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Magnatic from '../magnatic/Magnatic'

function Navbar({isActive, setIsActive}) {
    const burger = useRef(null)

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(burger.current, {
            scrollTrigger:{
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: ()=>{gsap.to(burger.current, {scale: 1, duration: 0.25, ease: 'power1.out'})},
                onEnterBack: ()=>{
                    setIsActive(false)
                    gsap.to(burger.current, {scale: 0, duration: 0.25, ease: 'power1.out'})
                }
            }
        })
    },[])
    return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <p className={styles.nickname}>Lunar Dev</p>
            <p className={styles.name}>Boughazi Akram</p>
        </div>
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href='#home'>
                    <Magnatic>
                        <p>
                            Home
                        </p>
                    </Magnatic>
                    </a>
                </li>
                <li>
                    <a href='#about'>
                        <Magnatic>
                            <p>
                                About
                            </p>
                        </Magnatic>
                    </a>
                </li>
                <li>
                    <a href='#work'>
                        <Magnatic>
                            <p>
                                Work
                            </p>
                        </Magnatic>
                    </a>
                </li>
                <li>
                    <a href='#contact'>
                        <Magnatic>
                            <p>
                                Contact
                            </p>
                        </Magnatic>
                    </a>
                </li>
            </ul>
        </div>
            <div ref={burger} className={styles.hamburgerContainerMenu}>
            <Magnatic>
                <div  onClick={()=>setIsActive(!isActive)} className={styles.button}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
                </div>
            </Magnatic>
            </div>
    </div>
    )
}

export default Navbar