'use client'
import styles from './styles.module.css'

import {IconContext} from 'react-icons'
import {BsBootstrapFill} from 'react-icons/bs'
import {DiReact, DiSass, DiCss3} from 'react-icons/di'
import {SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux} from 'react-icons/si'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'

export const skillBlocks = [
    [<AiFillHtml5 className='hover:text-htmlIcon'/>, 'HTML',], 
    [<DiCss3 className='hover:text-cssIcon'/>, 'CSS'],
    [<SiJavascript className='hover:text-jsIcon'/>, 'JavaSCript'],
    [<DiReact className='hover:text-reactIcon'/>, 'React'],
    // [<SiNextdotjs/>, 'Next Js'],
    [<SiTypescript className='hover:text-tsIcon'/>, 'TypeScript'],
    [<SiRedux className='hover:text-reduxIcon'/>, 'Redux Toolkit'],
    [<AiFillGithub className='hover:text-white hover:bg-black rounded-full border-none'/>, 'Git'],
    [<BsBootstrapFill className='hover:text-bsIcon'/>, 'Bootstrap'],
    [<DiSass className='hover:text-sassIcon'/>, 'Sass'],
    [<SiTailwindcss className='hover:text-tailwindIcon'/>, 'Tailwind Css']
]

export default function TechStackSection(){
    
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' }); 

    return(
        <section className={styles.section}>
            <div className={styles.titles}>
            <h2 className={styles.title}>These are the technologies I&apos;ve been specializing in.</h2>
            <h3 className={styles.subtitle}>Everything you need to get your company&apos;s frontend back on track.</h3>
            </div>
            <div className={styles.skillList}>
                {skillBlocks.map((skill, index) => (
                    <div key={index} className={styles.skillBlock}>
                        {isSmallScreen ? (
                            <IconContext.Provider value={{size: '3.0rem'}}>
                                {skill[0]}
                            </IconContext.Provider>    
                        ) : (
                            <IconContext.Provider value={{size: '3.5rem'}}>
                                {skill[0]}
                            </IconContext.Provider>
                        )}
                        <div>{skill[1]}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}