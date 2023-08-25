import styles from './styles.module.css'
import Image from 'next/image'
export default function TestimonialSection({img, name, testimonial}: {img: string, name: string, testimonial: string[]}){
    return(
        <section className={styles.section}>
            <Image src={img} width='82' height='82' alt={name} className={styles.img}/>
            <h4 className={styles.name}>{name}</h4>
            <div className={styles.testimonialParagraphs}>
            {
                testimonial.map((testimonial, index) => (<p key={index}>{testimonial}</p>))
            }
            </div>
        </section>
    )
}