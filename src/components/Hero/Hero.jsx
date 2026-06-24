import Button from '../Button/Button';
import styles from './Hero.module.css';
import globeImage from '../../assets/icons/bluenova-globe.png';

const AVATARS = ['A', 'B', 'C', 'D'];

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bgEffects}>
        <div className={styles.gradientOrb} />
        <div className={styles.gridLines} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textCol}>
          <span className={styles.tagline}>Innovate • Transform • Succeed</span>
          <h1 id="hero-heading" className={styles.heading}>
            Empowering Businesses with{' '}
            <span className={styles.highlight}>Digital Excellence</span>
          </h1>
          <p className={styles.subheading}>
            Innovative software development, cloud solutions, AI services, and digital
            transformation strategies that drive measurable business growth.
          </p>
          <div className={styles.actions}>
            <Button to="/services" showArrow size="lg">
              Explore Services
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
          <div className={styles.trust}>
            <div className={styles.avatars} aria-hidden="true">
              {AVATARS.map((letter, i) => (
                <span key={i} className={styles.avatar}>
                  {letter}
                </span>
              ))}
              <span className={styles.avatarCount}>+50</span>
            </div>
            <div className={styles.trustText}>
              <strong>Trusted by 50+ Clients</strong>
              <span>We build relationships that last</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visualCol} aria-hidden="true">
          <div className={styles.visualWrapper}>
            <img
              src={globeImage}
              alt="Blue Nova Digital Globe"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
