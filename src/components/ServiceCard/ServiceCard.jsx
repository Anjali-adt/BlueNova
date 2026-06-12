import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ICON_MAP } from '../../utils/iconMap';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, icon, id, to }) => {
  const Icon = ICON_MAP[icon];
  const linkTo = to || `/services#${id}`;

  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>
        {Icon && <Icon size={28} aria-hidden="true" />}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={linkTo} className={styles.link} aria-label={`Learn more about ${title}`}>
        <ArrowRight size={18} />
      </Link>
    </article>
  );
};

export default ServiceCard;
