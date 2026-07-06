import React from 'react';
import './StatsGrid.css';
import { StatCard } from '../../molecules/StatCard/StatCard';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      icon: 'star' as const,
      value: '45K+',
      label: 'GitHub Stars',
      themeColor: 'blue' as const,
    },
    {
      icon: 'download' as const,
      value: '8.5M+',
      label: 'Downloads',
      themeColor: 'orange' as const,
    },
    {
      icon: 'globe' as const,
      value: '250K+',
      label: 'Active Installs',
      themeColor: 'green' as const,
    },
    {
      icon: 'heart' as const,
      value: '4.8/5',
      label: 'User Rating',
      themeColor: 'pink' as const,
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container animate-fade-in-delayed-more">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            themeColor={stat.themeColor}
            className={`stat-card-index-${index}`}
          />
        ))}
      </div>
    </section>
  );
};
