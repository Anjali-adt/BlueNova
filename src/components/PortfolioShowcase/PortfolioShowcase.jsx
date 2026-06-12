import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import { PORTFOLIO_ITEMS } from '../../constants/content';
import styles from './PortfolioShowcase.module.css';

const GRADIENTS = {
  crm: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
  fintech: 'linear-gradient(135deg, #1a365d 0%, #3182ce 100%)',
  ai: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
  cloud: 'linear-gradient(135deg, #1a202c 0%, #2b6cb0 100%)',
};

const PortfolioShowcase = () => {
  return (
    <section className="section" aria-labelledby="portfolio-heading">
      <div className="container">
        <SectionHeader
          label="Our Portfolio"
          title="Projects That Drive Results"
          description="Explore our portfolio of successful digital transformation projects across industries."
        />

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
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <Link to="/portfolio" className={styles.link}>
                  View Project <ExternalLink size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button to="/portfolio" showArrow>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
