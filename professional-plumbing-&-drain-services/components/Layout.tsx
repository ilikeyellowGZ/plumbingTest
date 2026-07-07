import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { BRAND, NAV_LINKS, SERVICES } from '../constants';
import { Button } from './Button';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    document.title = `${BRAND.name}${location.pathname === '/' ? '' : ` | ${activeTitle(location.pathname)}`}`;
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group">
            <span className="icon-line"><Clock size={15} /> 24/7 Emergency Service</span>
            <span className="icon-line"><MapPin size={15} /> Serving {BRAND.city} and nearby areas</span>
          </div>
          <a className="icon-line" href={`mailto:${BRAND.email}`}><Mail size={15} /> {BRAND.email}</a>
        </div>
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <div className="container nav-inner">
          <Link to="/" className="logo" aria-label={`${BRAND.name} home`}>
            <span className="logo-mark" aria-hidden="true"><img src="/imgs/site-logo.svg" alt="" /></span>
            <span className="logo-text">
              <span className="brand-font logo-title">{BRAND.shortName}</span>
              <span className="logo-subtitle">Plumbing & drains</span>
            </span>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <a href={`tel:${BRAND.phone}`} className="nav-phone">
            <span>Call the hotline</span>
            <strong>{BRAND.phone}</strong>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container mobile-menu-inner">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                    {link.label}
                  </NavLink>
                ))}
                <Button fullWidth onClick={() => { window.location.href = `tel:${BRAND.phone}`; }}>
                  <Phone size={18} /> Call {BRAND.phone}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="site-main"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link to="/" className="logo">
              <span className="logo-mark" aria-hidden="true"><img src="/imgs/site-logo.svg" alt="" /></span>
              <span className="logo-text">
                <span className="brand-font logo-title" style={{ color: 'var(--text-inverse)' }}>{BRAND.shortName}</span>
                <span className="logo-subtitle">Plumbing & drains</span>
              </span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.70)', lineHeight: 1.7 }}>
              Licensed plumbing and drain support with upfront pricing, tidy work, and emergency response.
            </p>
          </div>

          <div>
            <h4 className="h3">Pages</h4>
            <ul>
              {NAV_LINKS.map((link) => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="h3">Services</h4>
            <ul>
              {SERVICES.slice(0, 5).map((service) => <li key={service.id}><Link to="/services">{service.title}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="h3">Contact</h4>
            <ul>
              <li><a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></li>
              <li><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
              <li>{BRAND.address}</li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>Copyright {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Licensed, insured, and available 24/7.</span>
        </div>
      </footer>
    </div>
  );
};

function activeTitle(pathname: string) {
  const match = NAV_LINKS.find((link) => link.to === pathname);
  return match?.label ?? 'Service';
}
