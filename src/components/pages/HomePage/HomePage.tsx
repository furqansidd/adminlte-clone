import React from 'react';
import { HomeTemplate } from '../../templates/HomeTemplate/HomeTemplate';
import { Header } from '../../organisms/Header/Header';
import { Hero } from '../../organisms/Hero/Hero';
import { Showcase } from '../../organisms/Showcase/Showcase';
import { StatsGrid } from '../../organisms/StatsGrid/StatsGrid';
import { ProductGrid } from '../../organisms/ProductGrid/ProductGrid';

export const HomePage: React.FC = () => {
  return (
    <HomeTemplate
      header={<Header />}
      hero={<Hero />}
      showcase={<Showcase />}
      stats={<StatsGrid />}
      products={<ProductGrid />}
    />
  );
};
