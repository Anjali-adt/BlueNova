import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'info@bluenova.com', href: 'mailto:info@bluenova.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Address', value: '123 Tech Avenue, Suite 500\nSan Francisco, CA 94105' },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Fri: 9:00 AM – 6:00 PM PST' },
];

const Contact = () => {
  usePageTitle('Contact Us');

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start a Conversation"
        description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours."
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2 className={styles.heading}>Get In Touch</h2>
              <p className={styles.description}>
                Whether you need a custom software solution, cloud migration, or AI integration,
                our team is ready to help you achieve your goals.
              </p>
              <ul className={styles.infoList}>
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>{label}</span>
                      {href ? (
                        <a href={href} className={styles.infoValue}>{value}</a>
                      ) : (
                        <span className={styles.infoValue}>{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
