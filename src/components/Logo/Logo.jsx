// import { Link } from 'react-router-dom';
// import styles from './Logo.module.css';

// const Logo = ({ variant = 'default' }) => {
//   return (
//     <Link to="/" className={styles.logo} aria-label="BlueNova IT Services - Home">
//       <div className={`${styles.icon} ${variant === 'large' ? styles.iconLarge : ''}`}>
//         <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//           <defs>
//             <linearGradient id="bnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#60A5FA" />
//               <stop offset="100%" stopColor="#2563EB" />
//             </linearGradient>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="2" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>
//           <path
//             d="M8 36V12L24 8L40 12V36L24 40L8 36Z"
//             stroke="url(#bnGrad)"
//             strokeWidth="1.5"
//             fill="rgba(37, 99, 235, 0.1)"
//           />
//           <text
//             x="24"
//             y="30"
//             textAnchor="middle"
//             fill="url(#bnGrad)"
//             fontSize="14"
//             fontWeight="700"
//             fontFamily="Poppins, sans-serif"
//           >
//             BN
//           </text>
//           <circle cx="38" cy="10" r="2.5" fill="#60A5FA" filter="url(#glow)" />
//         </svg>
//       </div>
//       <div className={styles.text}>
//         <span className={styles.brand}>BLUE NOVA</span>
//         <span className={styles.tagline}>— IT SERVICES —</span>
//       </div>
//     </Link>
//   );
// };

// export default Logo;
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../assets/icons/bluenova-logo.png';

const Logo = ({ variant = 'default' }) => {
  return (
    <Link
      to="/"
      className={styles.logo}
      aria-label="BlueNova IT Services - Home"
    >
      <img
        src={logo}
        alt="Blue Nova"
        className={`${styles.logoImage} ${
          variant === 'large' ? styles.logoImageLarge : ''
        }`}
      />
    </Link>
  );
};

export default Logo;