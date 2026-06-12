import { ICON_MAP } from '../../utils/iconMap';
import { COMPANY_STATS } from '../../constants/content';
import styles from './StatsBar.module.css';

const StatsBar = () => {
  return (
    <section className={styles.statsBar} aria-label="Company statistics">
      <div className={`container ${styles.inner}`}>
        {COMPANY_STATS.map((stat) => {
          const Icon = ICON_MAP[stat.icon];
          return (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.iconWrap}>
                {Icon && <Icon size={22} aria-hidden="true" />}
              </div>
              <div className={styles.info}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsBar;
