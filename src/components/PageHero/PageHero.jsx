import styles from './PageHero.module.css';

const PageHero = ({ label, title, description }) => {
  return (
    <section className={styles.hero} aria-labelledby="page-hero-title">
      <div className={styles.bgEffects}>
        <div className={styles.gradient} />
      </div>
      <div className={`container ${styles.content}`}>
        {label && <span className={styles.label}>{label}</span>}
        <h1 id="page-hero-title" className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
};

export default PageHero;
