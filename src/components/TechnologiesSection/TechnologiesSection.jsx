import SectionHeader from '../SectionHeader/SectionHeader';
import { TECHNOLOGIES } from '../../constants/content';
import styles from './TechnologiesSection.module.css';

const TechnologiesSection = () => {
  const categories = [...new Set(TECHNOLOGIES.map((t) => t.category))];

  return (
    <section className={`section sectionAlt`} aria-labelledby="tech-heading">
      <div className="container">
        <SectionHeader
          label="Technologies"
          title="Technologies We Work With"
          description="We leverage industry-leading tools and frameworks to build robust, scalable solutions."
        />

        <div className={styles.grid}>
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <span className={styles.techName}>{tech.name}</span>
              <span className={styles.techCategory}>{tech.category}</span>
            </div>
          ))}
        </div>

        <div className={styles.categories}>
          {categories.map((cat) => (
            <span key={cat} className={styles.categoryBadge}>{cat}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
