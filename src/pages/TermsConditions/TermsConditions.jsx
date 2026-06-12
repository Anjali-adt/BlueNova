import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import styles from './Legal.module.css';

const TermsConditions = () => {
  usePageTitle('Terms & Conditions');

  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website and services."
      />

      <section className="section">
        <div className={`container ${styles.content}`}>
          <p className={styles.updated}>Last updated: June 1, 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the BlueNova IT Services website, you accept and agree to be
            bound by these Terms and Conditions. If you do not agree to these terms, please do not
            use our website.
          </p>

          <h2>Services</h2>
          <p>
            BlueNova IT Services provides information technology consulting, software development,
            cloud solutions, and related services. All services are subject to separate service
            agreements between BlueNova and the client.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the
            property of BlueNova IT Services and is protected by applicable intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            BlueNova IT Services shall not be liable for any indirect, incidental, special, or
            consequential damages arising from the use of our website or services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the State
            of California, without regard to its conflict of law provisions.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms & Conditions, contact us at{' '}
            <a href="mailto:legal@bluenova.com">legal@bluenova.com</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
