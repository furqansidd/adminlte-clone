import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'subscribe';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'outline',
  size = 'md',
  pill = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    pill ? 'btn-pill' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
