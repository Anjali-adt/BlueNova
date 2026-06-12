import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import { SERVICES } from '../../constants/content';
import styles from './Services.module.css';

const Services = () => {
  usePageTitle('Services');

  return (
    <>
      <PageHero
        label="Our Services"
        title="Smart Solutions for Your Business"
        description="End-to-end IT services designed to accelerate your digital transformation and drive measurable results."
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id} className={styles.serviceItem}>
                <ServiceCard {...service} to={`/services#${service.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default Services;
