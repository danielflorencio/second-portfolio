import {FiExternalLink} from 'react-icons/fi'
import { projects } from '@/data/projects'
import styles from './styles.module.css'
export default function Projects(){
    return(
        <section className={styles.section}>
            {projects.map((project, index) => (
                <div key={index} className={styles.projectBlock}>
                    <div style={{minWidth: '20rem'}} className={styles.projectImgContainer}><img className={styles.projectImg} src={project.imgSrc}></img></div>
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
        </section>
    )
}