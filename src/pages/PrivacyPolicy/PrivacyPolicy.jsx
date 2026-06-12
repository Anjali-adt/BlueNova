import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import styles from './Legal.module.css';

const PrivacyPolicy = () => {
  usePageTitle('Privacy Policy');

  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="Your privacy is important to us. This policy outlines how we collect, use, and protect your information."
      />

      <section className="section">
        <div className={`container ${styles.content}`}>
          <p className={styles.updated}>Last updated: June 1, 2026</p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact
            form, subscribe to our newsletter, or communicate with us. This may include your name,
            email address, phone number, company name, and any other information you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you technical notices, updates, and administrative messages</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as described in this policy or as required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@bluenova.com">privacy@bluenova.com</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
