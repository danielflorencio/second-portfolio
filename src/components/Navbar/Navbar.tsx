'use client'
import styles from './styles.module.css'
import Image from 'next/image'
export default function Navbar(){

    return(
        <div className={styles.nav}>
            <Image src="/green-purple-logo-no-bg.png" alt='logo' width={80} height={80} style={{marginTop: -35, marginBottom: -35, marginLeft: '-5%'}} priority/>
            <div className={styles.rightAlignContainer}>
            <ul className={styles.ul}>
                <li className={styles.li}><a href='#tech-stack'>Tech Stack</a></li>
                <li className={styles.li}><a href='#projects'>Projects</a></li>
                <li className={styles.li}><a href='#testimonial'>Testimonial</a></li>
            </ul>
            <button className={styles.button}>Talk to me</button>
            </div>
        </div>
    )
}