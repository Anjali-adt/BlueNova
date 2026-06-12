import { usePageTitle } from '../../hooks/usePageTitle';
import Hero from '../../components/Hero/Hero';
import StatsBar from '../../components/StatsBar/StatsBar';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import PortfolioShowcase from '../../components/PortfolioShowcase/PortfolioShowcase';
import TechnologiesSection from '../../components/TechnologiesSection/TechnologiesSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import { SERVICES } from '../../constants/content';
import styles from './Home.module.css';

const Home = () => {
  usePageTitle(null);

  return (
    <>
      <Hero />
      <StatsBar />

      <section className={`section ${styles.services}`} aria-labelledby="services-heading">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Smart Solutions for Your Business"
            description="Comprehensive IT services tailored to accelerate your digital transformation journey."
          />
          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <PortfolioShowcase />
      <TechnologiesSection />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;
