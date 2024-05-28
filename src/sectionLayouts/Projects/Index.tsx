import {FiExternalLink} from 'react-icons/fi'
import { TProject, projects } from '@/data/projects'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Projects(){
    return(
        <section id='projects' className={styles.section}>
            <h2 className={styles.sectionTitle}>Take a look at some of the projects I've made.</h2>
            <div className={styles.container}>
                <PortfolioProject project={projects[0]}/>
                <PortfolioProject project={projects[1]}/>
            </div>
        </section>
    )
}


const PortfolioProject = ({project}: {project: TProject}) => {
    return(
        <div className={styles.projectBlock}>
            <div className={styles.projectImgContainer}>
                <Image alt='' height={project.customHeight} width={project.customWidth} src={project.imgSrc} className={styles.projectImg}/>
            </div>
            <div className={styles.projectDescriptionContainer}>
                <div>
                    <div className={styles.titleAndIconContainer}>
                        <h3 className="">{project.title}</h3>
                        <a href={project.liveLink} className="hover:text-sky-400 transition-colors duration-150" target="_blank" rel="noopener noreferrer">
                            <FiExternalLink/>
                        </a>
                    </div>
                    <div className={styles.descriptionParagraphs}>
                    {project.descriptionParagraphs.map((paragraph: any, pIndex: number) =>(
                        <p key={pIndex} className={styles.descriptionParagraph}>{paragraph}<br/><br/></p>
                    ))}
                    </div>
                </div>
                <div className={styles.skillList}>
                    {project.skills.map((skill: any, skillIndex: number) => (
                        <div key={skillIndex} className={styles.skillItem}>{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}