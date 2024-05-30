'use client'
import { Testimonial } from "@/components/Testimonial/Testimonial";
import { useState } from "react"
import { testimonialsData } from "./testimonials";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import styles from './styles.module.css'

export const TestimonialCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [animations, setAnimations] = useState<{leftItemAnimation: string, rightItemAnimation: string}>({
      leftItemAnimation: styles.disappearLeft,
      rightItemAnimation: styles.showLeft
    });

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
      setAnimations({
        leftItemAnimation: styles.disappearLeft,
        rightItemAnimation: styles.showLeft
      });
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
      setAnimations({
        leftItemAnimation: styles.disappearRight,
        rightItemAnimation: styles.showRight
      })
    };

    return(
      <section className={styles.section}>
          <div onClick={prevSlide} className={styles.button}>
              <FaArrowLeft size={22}/>
          </div>       
          <div className={styles.carouselContainer}>
            {testimonialsData.map((testimonial, index) => {        
              return(
                <div className={`${styles.carouselItem} ${currentIndex > index ? animations.leftItemAnimation : currentIndex < index ? animations.leftItemAnimation : ''}`}>
                  <Testimonial testimonial={testimonial} key={index}/>
                </div>
              )
            })}
          </div>     
          <div onClick={nextSlide} className={styles.button}>
              <FaArrowRight size={22}/>
          </div>
      </section>
    )
}