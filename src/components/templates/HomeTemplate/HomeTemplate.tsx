import React from 'react';
import './HomeTemplate.css';

interface HomeTemplateProps {
  header: React.ReactNode;
  hero: React.ReactNode;
  showcase: React.ReactNode;
  stats: React.ReactNode;
  products?: React.ReactNode;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  header,
  hero,
  showcase,
  stats,
  products,
}) => {
  return (
    <div className="home-layout">
      {/* Background patterns */}
      <div className="grid-bg-pattern"></div>

      {header}

      <main className="main-content">
        {hero}
        {showcase}
        {stats}
        {products}
      </main>
    </div>
  );
};
