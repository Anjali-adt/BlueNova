import { Check } from 'lucide-react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import { WHY_CHOOSE_US, ABOUT_FEATURES } from '../../constants/content';
import { ICON_MAP } from '../../utils/iconMap';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="why-choose-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.building}>
                <div className={styles.buildingFacade}>
                  <div className={styles.buildingWindows}>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span key={i} className={styles.window} />
                    ))}
                  </div>
                  <div className={styles.buildingLogo}>BN</div>
                </div>
              </div>
              <div className={styles.imageGlow} />
            </div>
          </div>

          <div className={styles.contentCol}>
            <SectionHeader
              label="About Us"
              title="We Are Blue Nova IT Services"
              align="left"
            />
            <p className={styles.description}>
              BlueNova is a leading IT services company dedicated to empowering businesses
              through innovative technology solutions. With a team of passionate experts, we
              deliver scalable, secure, and cutting-edge digital transformation strategies.
            </p>
            <ul className={styles.features}>
              {ABOUT_FEATURES.map((feature) => (
                <li key={feature} className={styles.feature}>
                  <span className={styles.checkIcon}>
                    <Check size={16} aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button to="/about" showArrow className={styles.cta}>
              Learn More
            </Button>
          </div>
        </div>

        <div className={styles.reasons}>
          <SectionHeader
            label="Why Choose Us"
            title="What Sets Us Apart"
            description="We combine technical excellence with a client-first approach to deliver solutions that drive real business impact."
          />
          <div className={styles.reasonsGrid}>
            {WHY_CHOOSE_US.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div key={item.title} className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>
                    {Icon && <Icon size={24} aria-hidden="true" />}
                  </div>
                  <h3 className={styles.reasonTitle}>{item.title}</h3>
                  <p className={styles.reasonDesc}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
