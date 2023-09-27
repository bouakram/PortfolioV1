import React, { useRef } from 'react'
import styles from './stack.module.scss'
import reactImg from '../../images/reactjs.png'
import nodeImg from '../../images/nodejs.png'
import mongoImg from '../../images/mongodb.png'
import expressImg from '../../images/express.png'
import reactnativeImg from '../../images/reactnative.png'
import reduxImg from '../../images/redux.png'
import bootstrapImg from '../../images/bootstrap.png'
import gitImg from '../../images/git.png'
import dockerImg from '../../images/docker.png'
import hcjIgm from '../../images/htmlcssjs.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const slider1 = [
    {
        img: reactImg,
        title: 'React Js'
    },
    {
        img: nodeImg,
        title: 'Node Js'
    },
    {
        img: mongoImg,
        title: 'Mongo DB'
    },
    {
        img: expressImg,
        title: 'Express Js'
    },
    {
        img: reactnativeImg,
        title: 'React Native'
    },
]
const slider2 = [
    {
        img: hcjIgm,
        title: 'Vanila Front'
    },
    {
        img: reduxImg,
        title: 'ReduxToolkit'
    },
    {
        img: gitImg,
        title: 'Git'
    },
    {
        img: dockerImg,
        title: 'Docker'
    },
    {
        img: bootstrapImg,
        title: 'Bootstrap'
    },
]
function Stack() {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const x1 = useTransform(scrollYProgress, [0,1], [0,150])
    const x2 = useTransform(scrollYProgress, [0,1], [0,-150])
    const height = useTransform(scrollYProgress, [0,0.8], [50,0])
  return (
    <div ref={container} className={styles.slidingImages}>
        <motion.div style={{x: x1}} className={styles.slider}>
            {
                slider1.map((items, index)=>{
                    return (
                        <div key={index} className={styles.stacks}>
                                <img src={items.img} alt={items.title} />
                        </div>
                    )
                })
            }
        </motion.div>
        <motion.div style={{x: x2}} className={styles.slider}>
            {
                slider2.map((items, index)=>{
                    return (
                        <div key={index} className={styles.stacks}>
                                <img src={items.img} alt={items.title} />
                        </div>
                    )
                })
            }
        </motion.div>
        <motion.div style={{height}} className={styles.circleContainer}>
            <div className={styles.circle}></div>
        </motion.div>
    </div>
  )
}

export default Stack