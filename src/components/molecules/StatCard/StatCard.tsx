import React from 'react';
import './StatCard.css';
import { Icon } from '../../atoms/Icon/Icon';
import type { IconType } from '../../atoms/Icon/Icon';
import { Heading } from '../../atoms/Heading/Heading';
import { Text } from '../../atoms/Text/Text';

interface StatCardProps {
  icon: IconType;
  value: string;
  label: string;
  themeColor: 'blue' | 'orange' | 'green' | 'pink';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  themeColor,
  className = '',
}) => {
  return (
    <div className={`stat-card stat-card-theme-${themeColor} ${className}`}>
      <div className="stat-icon-wrapper">
        <Icon name={icon} size={18} className="stat-icon" />
      </div>
      <div className="stat-content">
        <Heading level={2} className="stat-value">
          {value}
        </Heading>
        <Text variant="small" className="stat-label">
          {label}
        </Text>
      </div>
    </div>
  );
};
