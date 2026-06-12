import Button from '../Button/Button';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.bgGlow} />
      <div className={`container ${styles.inner}`}>
        <h2 id="cta-heading" className={styles.title}>
          Ready to Transform Your Business?
        </h2>
        <p className={styles.description}>
          Let&apos;s discuss how BlueNova can help you achieve your digital transformation goals.
          Get in touch with our team today.
        </p>
        <div className={styles.actions}>
          <Button to="/contact" showArrow size="lg">
            Start a Project
          </Button>
          <Button to="/services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
