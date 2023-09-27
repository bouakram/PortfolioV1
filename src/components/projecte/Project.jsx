import React, { useRef } from 'react'
import styles from './project.module.scss'
import { color } from '../../constants/colors'
import { motion, useInView, useScroll } from 'framer-motion'
import { scaleinview } from './animate'
import Magnatic from '../magnatic/Magnatic'

import typinggameImg from '../../images/projects/typinggame.png'
import firstprojectImg from '../../images/projects/firstproject.png'
import secoundprojectImg from '../../images/projects/secoundproject.png'
import bootstrapprojectImg from '../../images/projects/bootstrapproject.png'
import tailwindprojectImg from '../../images/projects/manage.png'
import tenziegameImg from '../../images/projects/tenzies.png'
import trackingissImg from '../../images/projects/bootstrapproject.png'

const projects = [
    {
        img: typinggameImg,
        title: 'Typing Game',
        stack: 'HTML, CSS, JS',
        description: 'This is a Typing game i made it using vanilla java script it was in my starting journy as a web developer i practiced my knowledge of vanilla js in this little project',
        urlproject: 'https://github.com/bouakram/Typing-Game',
        urldemo:'https://bouakram.github.io/Typing-Game/',
        learn: true
    },
    {
        img: firstprojectImg,
        title: 'Landing pages',
        stack: 'HTML, CSS',
        description: 'This is my first web page i made after learning the basics of HTML and CSS',
        urlproject: 'https://github.com/bouakram/HTML-CSS--template-one',
        urldemo:'https://bouakram.github.io/HTML-CSS--template-one/web_pages/',
        learn: true
    },
    {
        img: secoundprojectImg,
        title: 'Landing pages two',
        stack: 'HTML, CSS',
        description: 'This is my secound web page i made after learning the basics of HTML and CSS and the first web paje here i learnd more about layout and responcive web page',
        urlproject: 'https://github.com/bouakram/FrontEnd_web_tempmplate_two',
        urldemo:'https://bouakram.github.io/FrontEnd_web_tempmplate_two/',
        learn: true
    },
    {
        img: bootstrapprojectImg,
        title: 'Bootstrap Landing pages',
        stack: 'HTML, Bootstrap',
        description: 'This is my third web page i made after learning and practicing more of HTML and CSS and after building two web pages using them, now it is time to learn about css framework like bootstrap',
        urlproject: 'https://github.com/bouakram/bootstrap-frontend-template',
        urldemo:'https://bouakram.github.io/bootstrap-frontend-template/',
        learn: true
    },
    {
        img: tailwindprojectImg,
        title: 'Tailwindcss Landing pages',
        stack: 'HTML, tailwindcss',
        description: 'This is my fouth web page i made after learning and practicing more of HTML and CSS and trying BOOTSTRAP i want to learn more about css framework and i heard about tailwindcss wich is low level compare with bootstrap in this project i build this web page using tailwind css and i get familiar with and i decide to use it in my projects i like it !',
        urlproject: 'https://github.com/bouakram/tailwind-project/blob/master/manage.png',
        urldemo:'https://62d30bf8200b4b3bdc63e8e9--silver-speculoos-53e894.netlify.app/',
        learn: true
    },
    {
        img: trackingissImg,
        title: 'Tracking the ISS',
        stack: 'HTML, JS',
        description: 'After learning bascics of JS it is time to learn more about JS and fetching data, in this small project i build an application to track and desplay the ISS on the map by ISS API',
        urlproject: 'https://github.com/bouakram/Traking-the-ISS',
        urldemo:'https://bouakram.github.io/Traking-the-ISS/',
        learn: true
    },
    {
        img: tenziegameImg,
        title: 'Tenzies React Game',
        stack: 'React  Js',
        description: 'After learning and practicing what i lear of HTML CSS JS and css frameworks and learning some new thing while practice, i feelt like its time to learn somting new JS librarie - React Js - in this project i learned and practeced React Js basics i learned about rendering props hooks and more...',
        urlproject: 'https://github.com/bouakram/tenzies-react-game',
        urldemo:'https://62d2ed490422272a82aa83cd--startling-profiterole-f49330.netlify.app/',
        learn: true
    },
]

function Project() {
    const ref = useRef(null)
    // const {scrollYProgress} = useScroll({
    //     target: ref,
    //     offset: ['0 1', '1 0']
    // })
    const isInView = useInView(ref)
  return (
    <div id='work' ref={ref} className={styles.project} style={{backgroundColor: `${color.dark}`}}>
        {
            projects.map((project, index)=>{
                return (
                    <motion.div variants={scaleinview} initial='initial' animate={isInView? 'open': 'exit'} custom={index} key={index} className={styles.projectcard}>
                        <span className={styles.type}>{project.learn ? <p>learning project</p> : <p>freelancing</p>}</span>
                        <div className={styles.projectinfo}>
                            <p className={styles.projecttitle}>
                                {project.title}
                            </p>
                            <p className={styles.projectdescription}>
                                {project.description}
                            </p>
                            <dir className={styles.projectstackcontainer}>
                                {project.stack.split(',').map((stack,index)=>{
                                    return <span key={index} className={styles.projectstack}>#{stack}</span>
                                })}
                            </dir>
                            <div className={styles.buttoncontainer}>
                                <Magnatic>
                                    <a href={project.urldemo} target='_blank'>Play demo</a>
                                </Magnatic>
                                <Magnatic>
                                    <a href={project.urlproject} target='_blank'>See code</a>
                                </Magnatic>
                            </div>
                        </div>
                        <div className={styles.projectimagecontainer}>
                                <img src={project.img} alt={project.title} />
                        </div>
                    </motion.div>
                )
            })
        }
    </div>
  )
}

export default Project