import React from 'react';
import './Heading.css';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  className = '',
  children,
}) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <Tag className={`heading-level-${level} ${className}`}>{children}</Tag>;
};
