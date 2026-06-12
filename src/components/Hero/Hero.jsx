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
        {/* <div className={styles.particles}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div> */}
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

        {/* <div className={styles.visualCol} aria-hidden="true">
          <div className={styles.visualWrapper}>
            <div className={styles.glowRing} />
            <div className={styles.globe}>
              <svg viewBox="0 0 200 200" className={styles.globeSvg}>
                <defs>
                  <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="none" stroke="url(#globeGrad)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.3" />
                <ellipse cx="100" cy="100" rx="30" ry="90" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.3" />
                <ellipse cx="100" cy="100" rx="60" ry="90" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.3" />
                <path d="M10 100 Q100 60 190 100" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.5" />
                <path d="M10 100 Q100 140 190 100" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>
            <div className={styles.logo}>
              <svg viewBox="0 0 120 120" fill="none">
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <filter id="heroGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M20 90V30L60 20L100 30V90L60 100L20 90Z"
                  stroke="url(#heroGrad)"
                  strokeWidth="2"
                  fill="rgba(37, 99, 235, 0.15)"
                  filter="url(#heroGlow)"
                />
                <text
                  x="60"
                  y="68"
                  textAnchor="middle"
                  fill="url(#heroGrad)"
                  fontSize="32"
                  fontWeight="700"
                  fontFamily="Poppins, sans-serif"
                >
                  BN
                </text>
              </svg>
            </div>
            <div className={styles.lightStreak} />
            <div className={styles.lightStreak2} />
          </div>
        </div> */}
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
