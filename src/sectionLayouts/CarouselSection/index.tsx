'use client'

import { Testimonial } from "@/components/Testimonial/Testimonial";
import { useEffect, useState } from "react"
import { testimonialsData } from "./testimonials";
import styles from './styles.module.css'

// const getCarouselAnimation = (previousIndex?: number, nextIndex?: number): string => {
//     if(previousIndex)
//     return 'no-animation';
// }


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
            <button onClick={prevSlide} className="carousel-button prev-button">
                &#10094;
            </button>       
            <div className={styles.carouselContainer}>
              {testimonialsData.map((testimonial, index) => {        
                  return(
                    <div className={`${styles.carouselItem} ${currentIndex > index ? animations.leftItemAnimation : currentIndex < index ? animations.leftItemAnimation : styles.hidden}`}>
                      {/* /index: {index} currentIndex: {currentIndex} / */}
                      <Testimonial testimonial={testimonial} key={index}/>
                    </div>
                  )
                })}
            </div>     
            <button onClick={nextSlide} className="carousel-button next-button">
                &#10095;
            </button>
        </section>
    )
}

  {/* <Testimonial testimonial={testimonialsData[currentIndex]}/> */}

  {/* {testimonialsData.map((testimonial, index) => {
      return (
          <div key={index} className={currentIndex === index ? styles.activeIcon : styles.inactiveIcon}/>
      )
  })} */}