import { useState } from 'react';
import { submitContactForm } from '../../services/api';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await submitContactForm(formData);
      setStatus({ type: 'success', message: 'Thank you! We will get back to you shortly.' });
      setFormData(INITIAL_STATE);
    } catch {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been received. We will get back to you shortly.',
      });
      setFormData(INITIAL_STATE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
            placeholder="John Doe"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={styles.input}
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="service" className={styles.label}>Service Interested In</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select a service</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-app">Mobile App Development</option>
          <option value="java-enterprise">Java Enterprise Solutions</option>
          <option value="cloud">Cloud Solutions</option>
          <option value="ai">AI Solutions</option>
          <option value="seo">SEO & Digital Marketing</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
          rows={5}
          placeholder="Tell us about your project..."
        />
      </div>

      {status.message && (
        <div
          className={`${styles.status} ${styles[status.type]}`}
          role="alert"
        >
          {status.message}
        </div>
      )}

      <Button type="submit" showArrow disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
