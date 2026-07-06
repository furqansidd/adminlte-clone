import React from 'react';

export type IconType = 'star' | 'download' | 'globe' | 'heart';

interface IconProps {
  name: IconType;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  const getIconPath = () => {
    switch (name) {
      case 'star':
        return (
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        );
      case 'download':
        return (
          <>
            <path
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <polyline
              points="7 10 12 15 17 10"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <line
              x1="12"
              y1="15"
              x2="12"
              y2="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </>
        );
      case 'globe':
        return (
          <>
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <line
              x1="2"
              y1="12"
              x2="22"
              y2="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </>
        );
      case 'heart':
        return (
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        );
      default:
        return null;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={className}
      aria-hidden="true"
    >
      {getIconPath()}
    </svg>
  );
};
