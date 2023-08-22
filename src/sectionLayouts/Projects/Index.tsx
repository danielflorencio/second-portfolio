import {FiExternalLink} from 'react-icons/fi'
import { projects } from '@/data/projects'
import Image from 'next/image'
import styles from './styles.module.css'
export default function Projects(){
    return(
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Take a look at some of the projects I've made.</h2>
            {/* <h3 className={styles.sectionSubtitle}></h3> */}
            <div className={styles.container}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectBlock}>
                        <div style={{minWidth: '20rem'}} className={styles.projectImgContainer}><img alt='' height='400' width='330' src={project.imgSrc}/></div>
                        <div className="">
                            <div>
                                <div className='flex'>
                                    <h3 className="">{project.title}</h3><a href={project.liveLink} className="hover:text-sky-400 transition-colors duration-150" target="_blank" rel="noopener noreferrer"><FiExternalLink/></a>
                                </div>
                                {project.descriptionParagraphs.map((paragraph, pIndex) =>(
                                    <p key={pIndex} className="">{paragraph}<br/><br/></p>
                                ))}
                            </div>
                            <div className={styles.skillList}>
                                {project.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className={styles.skillItem}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}