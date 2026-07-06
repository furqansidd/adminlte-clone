import React, { useState } from 'react';
import './Header.css';
import { Logo } from '../../atoms/Logo/Logo';
import { NavMenu } from '../../molecules/NavMenu/NavMenu';
import { Button } from '../../atoms/Button/Button';

export const Header: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Documents', href: '#docs' },
    { label: 'Premium Templates', href: '#premium' },
    { label: 'Blog', href: '#blog' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />
        <div className="header-right-desktop">
          <NavMenu items={navItems} activeHref="#home" className="header-nav-desktop" />
          <div className="header-cta-desktop">
            <Button variant="subscribe" size="sm" pill>
              Subscribe
            </Button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile navigation panel */}
      <div className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-nav-item">
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-nav-item mobile-cta-item">
            <Button variant="subscribe" size="md" pill onClick={() => setMobileMenuOpen(false)}>
              Subscribe
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
