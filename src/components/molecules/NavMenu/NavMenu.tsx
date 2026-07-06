import React from 'react';
import './NavMenu.css';

interface NavItem {
  label: string;
  href: string;
}

interface NavMenuProps {
  items: NavItem[];
  activeHref?: string;
  className?: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  items,
  activeHref = '#',
  className = '',
}) => {
  return (
    <nav className={`nav-menu ${className}`}>
      <ul className="nav-list">
        {items.map((item) => (
          <li key={item.label} className="nav-item">
            <a
              href={item.href}
              className={`nav-link ${item.href === activeHref ? 'active' : ''}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
