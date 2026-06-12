import { Check } from 'lucide-react';
import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import { ABOUT_FEATURES, COMPANY_STATS, WHY_CHOOSE_US } from '../../constants/content';
import { ICON_MAP } from '../../utils/iconMap';
import styles from './About.module.css';

const About = () => {
  usePageTitle('About Us');

  return (
    <>
      <PageHero
        label="About Us"
        title="We Are Blue Nova IT Services"
        description="A trusted technology partner dedicated to delivering innovative solutions that drive business growth and digital excellence."
      />

      <section className="section">
        <div className="container">
          <div className={styles.intro}>
            <div className={styles.introContent}>
              <h2 className={styles.heading}>Our Story</h2>
              <p className={styles.text}>
                Founded with a vision to bridge the gap between business needs and technology
                capabilities, BlueNova IT Services has grown into a full-service digital
                transformation partner. We combine deep technical expertise with a
                client-centric approach to deliver solutions that create lasting value.
              </p>
              <p className={styles.text}>
                From startups to enterprise organizations, we help businesses navigate the
                complexities of modern technology — building scalable applications, migrating
                to the cloud, and harnessing the power of artificial intelligence.
              </p>
              <ul className={styles.features}>
                {ABOUT_FEATURES.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button to="/contact" showArrow>Get In Touch</Button>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.visualCard}>
                <span className={styles.visualLogo}>BN</span>
                <p>Innovate • Transform • Succeed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            label="Our Impact"
            title="Numbers That Speak"
            description="Our track record reflects our commitment to excellence and client success."
          />
          <div className={styles.stats}>
            {COMPANY_STATS.map((stat) => {
              const Icon = ICON_MAP[stat.icon];
              return (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statIcon}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            label="Our Values"
            title="Why Partner With Us"
          />
          <div className={styles.values}>
            {WHY_CHOOSE_US.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div key={item.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
