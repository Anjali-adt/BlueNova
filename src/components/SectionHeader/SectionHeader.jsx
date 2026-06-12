import styles from './SectionHeader.module.css';

const SectionHeader = ({
  label,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <header className={`${styles.header} ${styles[align]} ${className}`}>
      {label && <span className={styles.label}>{label}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
};

export default SectionHeader;
