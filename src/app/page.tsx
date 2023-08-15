import Image from 'next/image'
import styles from './page.module.css'
import HeroSectionOne from '@/sectionLayouts/heroSectionOne'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <HeroSectionOne/>
    </main>
  )
}

// Pages to draw inspiration from: 
// https://www.algoexpert.io/product
