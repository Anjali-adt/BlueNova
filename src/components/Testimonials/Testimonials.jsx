import { Star } from 'lucide-react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { TESTIMONIALS } from '../../constants/content';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.id} className={styles.card}>
              <div className={styles.rating} aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className={styles.content}>&ldquo;{testimonial.content}&rdquo;</p>
              <footer className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <cite className={styles.name}>{testimonial.name}</cite>
                  <span className={styles.role}>{testimonial.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
