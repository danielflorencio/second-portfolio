import Image from 'next/image'
import styles from './page.module.css'
import HeroSectionOne from '@/sectionLayouts/heroSectionOne'
import Navbar from '@/components/Navbar/Navbar'
import TestimonialSection from '@/sectionLayouts/TestimonialSection'
import TechStackSection from '@/sectionLayouts/TechStackSection'
import NavbarContainer from '@/components/Navbar/NavbarContainer'
import Projects from '@/sectionLayouts/Projects/Index'
import Contact from '@/components/Contact/Index'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavbarContainer/>
      <HeroSectionOne/>
      <TechStackSection/>
      <TestimonialSection 
      img='/mateus-profile-pic.png' 
      name='Mateus Sousa' 
      // testimonial={[
      //   "I had already tried with with three different people to create a page for my digital agency. All I had was issues, the page would get loading stutters, and the final result were overall terrible...", 
      //   "But Daniel solved it with an ease I'm up until this moment in disbelief hahahahah the page is just Perfect! I already want to hire him for some other projects, and who knows, we might even become business partners."]}/>

      testimonial={[
        "I had already tried with three different people to create a page for my digital agency.",
        "All I had was issues, the page would get loading stutters, and the final results were always overall terrible...", 
        "But Daniel solved it with an ease I'm up until this moment in disbelief hahahahah the page is just Perfect!",
        "I already want to hire him for some other projects, and who knows, we might even become business partners."]}/>

      {/* <TestimonialSection img='' name='Second Person' testimonial={["Hey, this is the testimonial's first paragraph. Here will go everything someone will have to say about my work.", "These can be anything complimenting my work or saying what it was like to work with me."]}/> */}
      <Projects/>
      <Contact/>
    </main>
  )
}

// Pages to draw inspiration from: 
// https://www.algoexpert.io/product
// http://trydo.rainbowit.net/
// https://themeforest.net/item/abstrak-creative-agency-react-js-template/37917149