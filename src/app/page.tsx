import Image from 'next/image'
import styles from './page.module.css'
import HeroSectionOne from '@/sectionLayouts/heroSectionOne'
import Navbar from '@/components/Navbar/Navbar'
import TestimonialSection from '@/sectionLayouts/TestimonialSection'
import TechStackSection from '@/sectionLayouts/TechStackSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <HeroSectionOne/>
      <TestimonialSection img='' name='Mateus Sousa' testimonial={["Hey, this is the testimonial's first paragraph. Here will go everything someone will have to say about my work.", "These can be anything complimenting my work or saying what it was like to work with me."]}/>
      <TechStackSection/>
      <TestimonialSection img='' name='Second Person' testimonial={["Hey, this is the testimonial's first paragraph. Here will go everything someone will have to say about my work.", "These can be anything complimenting my work or saying what it was like to work with me."]}/>
    </main>
  )
}

// Pages to draw inspiration from: 
// https://www.algoexpert.io/product
// http://trydo.rainbowit.net/
// https://themeforest.net/item/abstrak-creative-agency-react-js-template/37917149