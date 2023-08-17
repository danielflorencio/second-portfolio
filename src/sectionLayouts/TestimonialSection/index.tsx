import styles from './styles.module.css'
export default function TestimonialSection({img, name, testimonial}: {img: string, name: string, testimonial: string[]}){
    return(
        <section className={styles.section}>
            <img src='img' className={styles.img}></img>
            <h4>{name}</h4>
            <div className={styles.testimonialParagraphs}>
            {
                testimonial.map((testimonial, index) => (<p key={index}>{testimonial}</p>))
            }
            </div>
        </section>
    )
}