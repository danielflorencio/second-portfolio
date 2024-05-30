import { TestimonialType } from "@/sectionLayouts/CarouselSection/testimonials";
import styles from './styles.module.css'
import Image from 'next/image'

export const Testimonial = ({testimonial}: {testimonial: TestimonialType}) => {

    const {img, name, paragraphs} = testimonial;

    return(
        <div className={styles.testimonialContainer}>
            <Image src={img} width='82' height='82' alt={name} className={styles.img}/>
            <h4 className={styles.name}>{name}</h4>
            <div className={styles.testimonialParagraphs}>
            {paragraphs.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
            </div>
        </div>
    )
}