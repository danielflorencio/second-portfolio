import Image from 'next/image'
import styles from './styles.module.css'
export default function heroSectionOne(){
    return(
        <section className={styles.section}>
            <div className={styles.titlesAndImg}>
                <div className={styles.titles}>            
                    <h1>Hi, I'm Daniel.</h1>
                    <h2>And your search for a software engineer has just ended.</h2>
                </div>
                <Image src='/heroImg.svg' alt='' width='300' height='300'/>
            </div>
        </section>
    )
}