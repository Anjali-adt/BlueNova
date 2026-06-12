import { ExternalLink } from 'lucide-react';
import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import { PORTFOLIO_ITEMS } from '../../constants/content';
import styles from './Portfolio.module.css';

const GRADIENTS = {
  crm: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
  fintech: 'linear-gradient(135deg, #1a365d 0%, #3182ce 100%)',
  ai: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
  cloud: 'linear-gradient(135deg, #1a202c 0%, #2b6cb0 100%)',
};

const Portfolio = () => {
  usePageTitle('Portfolio');

  return (
    <>
      <PageHero
        label="Portfolio"
        title="Projects That Drive Results"
        description="A showcase of our successful digital transformation projects across diverse industries."
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {PORTFOLIO_ITEMS.map((item) => (
              <article key={item.id} className={styles.card}>
                <div
                  className={styles.image}
                  style={{ background: GRADIENTS[item.image] || GRADIENTS.crm }}
                >
                  <span className={styles.category}>{item.category}</span>
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                  <button className={styles.link} type="button">
                    View Case Study <ExternalLink size={14} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default Portfolio;
