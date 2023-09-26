import React, { useLayoutEffect, useRef } from 'react'
import styles from './navbar.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
                onEnterBack: ()=>{gsap.to(burger.current, {scale: 0, duration: 0.25, ease: 'power1.out'})}
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
                <li >Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        <div ref={burger} onClick={()=>setIsActive(!isActive)} className={styles.hamburgerContainerMenu}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </div>
    </div>
    )
}

export default Navbar