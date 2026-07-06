import React from 'react';
import './Logo.css';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`logo-container ${className}`}>
      <span className="logo-text-admin">Admin</span>
      <span className="logo-text-lte">LTE</span>
    </div>
  );
};
