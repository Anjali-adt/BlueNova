import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import { TECHNOLOGIES } from '../../constants/content';
import styles from './Technologies.module.css';

const Technologies = () => {
  usePageTitle('Technologies');

  const grouped = TECHNOLOGIES.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        label="Technologies"
        title="Our Technology Stack"
        description="We work with industry-leading tools and frameworks to build robust, scalable, and future-proof solutions."
      />

      <section className="section">
        <div className="container">
          {Object.entries(grouped).map(([category, techs]) => (
            <div key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.grid}>
                {techs.map((tech) => (
                  <div key={tech.name} className={styles.techCard}>
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default Technologies;
