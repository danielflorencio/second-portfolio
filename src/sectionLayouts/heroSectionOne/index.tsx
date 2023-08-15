import Image from 'next/image'
import styles from './styles.module.css'
export default function heroSectionOne(){
    return(
        <section className={styles.section}>

            <div className={styles.titlesAndImg}>
                <div className={styles.titles}>            
                    <h1>Some title in here.</h1>
                    <h2>Some more descriptive subtitles, but now in here.</h2>
                </div>
                <Image src='/heroImg.svg' alt='' width='400' height='400'/>
            </div>
        </section>
    )
}