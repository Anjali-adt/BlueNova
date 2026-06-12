import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { NAV_LINKS } from '../../constants/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const isScrolled = useScrollPosition(50);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav
          className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li
                key={link.path}
                className={styles.navItem}
                onMouseEnter={() => link.children && setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={link.path}
                  className={`${styles.navLink} ${isActive(link.path) ? styles.active : ''}`}
                  onClick={closeMobile}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={14} className={styles.chevron} aria-hidden="true" />
                  )}
                </Link>

                {link.children && (
                  <ul
                    className={`${styles.dropdown} ${dropdownOpen === link.label ? styles.dropdownOpen : ''}`}
                    role="menu"
                  >
                    {link.children.map((child) => (
                      <li key={child.path} role="none">
                        <Link
                          to={child.path}
                          className={styles.dropdownLink}
                          role="menuitem"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileCta}>
            <Button to="/contact" showArrow onClick={closeMobile}>
              Get In Touch
            </Button>
          </div>
        </nav>

        <div className={styles.desktopCta}>
          <Button to="/contact" showArrow size="sm">
            Get In Touch
          </Button>
        </div>

        <button
          className={styles.menuToggle}
          onClick={toggleMobile}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
