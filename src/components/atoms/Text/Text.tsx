import React from 'react';
import './Text.css';

interface TextProps {
  variant?: 'body' | 'muted' | 'small';
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  className = '',
  children,
}) => {
  return <p className={`text-${variant} ${className}`}>{children}</p>;
};
