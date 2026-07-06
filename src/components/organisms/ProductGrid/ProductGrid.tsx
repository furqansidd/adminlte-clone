import React, { useState } from 'react';
import './ProductGrid.css';

// Import screenshot assets
import apexImg from '../../../assets/Apex Dashboard.png';
import zenithImg from '../../../assets/zenith dashboard.png';
import admindekImg from '../../../assets/Admindek HTML Dashboard.png';
import architectuiImg from '../../../assets/ArchitectUI Dashboard HTML PRO.png';
import hazeImg from '../../../assets/Haze Dashboard Nuxt.png';
import signalImg from '../../../assets/Signal Dashboard.png';
import freeImg from '../../../assets/dashboard-main.png';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  frameworks: string[];
}

export const ProductGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Premium', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    )},
    { id: 'html', label: 'HTML', icon: (
      <svg width="14" height="14" viewBox="0 0 384 512" fill="currentColor"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.2H124.4l4.1 48.2h175.6l-13.6 154.4-82.5 22-82.5-22-5.4-60.2h47.2l2.7 30 38 10 38-10 6.3-71.8H73.7l-12-136.2h251.2l-4.7 48.2z"/></svg>
    )},
    { id: 'react', label: 'React', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>
    )},
    { id: 'nextjs', label: 'Next.js', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.127 17.585l-7.79-10.038h-1.28v6.864H9.11V8.675l6.53 8.441a10.82 10.82 0 0 1-6.53 2.193 10.909 10.909 0 0 1 8.017-11.724z"/></svg>
    )},
    { id: 'vue', label: 'Vue', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 1.5H19.5L12 14.5L4.5 1.5H0L12 22.5L24 1.5Z" fill="#41B883"/><path d="M19.5 1.5H15.5L12 7.5L8.5 1.5H4.5L12 14.5L19.5 1.5Z" fill="#35495E"/></svg>
    )},
    { id: 'nuxt', label: 'Nuxt', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 4.5L19.5 19h-15L12 6.5z" fill="#00DC82"/></svg>
    )},
    { id: 'angular', label: 'Angular', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.7 3.6l1.6 14.2L12 24l8.7-6.2 1.6-14.2L12 0zm0 3.8l6.9 12.2h-2.4l-1.3-3.3H8.8l-1.3 3.3H5.1L12 3.8zm-1.8 7.4h3.6L12 7.7l-1.8 3.5z"/></svg>
    )},
    { id: 'laravel', label: 'Laravel', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
    )},
    { id: 'django', label: 'Django', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 8h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9m3 4v-4"/></svg>
    )},
    { id: 'tailwind', label: 'Tailwind', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    )},
    { id: 'shadcn', label: 'Shadcn UI', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="17" y1="21" x2="17" y2="13"/><line x1="9" y1="13" x2="21" y2="13"/></svg>
    )},
    { id: 'free', label: 'Free', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M12 2V11M7.5 7.5a2.5 2.5 0 0 1 4.5-1.5M16.5 7.5a2.5 2.5 0 0 0-4.5-1.5"/></svg>
    )}
  ];

  const products: Product[] = [
    {
      id: 'apex',
      title: 'Apex Dashboard',
      description: 'Apex is a production-ready Next.js 16 admin template with React 19, TypeScript 5, Tailwind CSS v4, and shadcn/ui. Includes 5 dashboard variations, 20+ app pages, theme customizer, dark mode, and RTL support.',
      image: apexImg,
      price: '$69',
      frameworks: ['nextjs', 'react', 'tailwind', 'shadcn']
    },
    {
      id: 'zenith',
      title: 'Zenith Dashboard',
      description: 'Zenith is an ultra-minimal admin template inspired by shadcn/ui aesthetics. Built with Next.js 16 and Geist font, it offers clean lines, achromatic palette, and distraction-free data presentation.',
      image: zenithImg,
      price: '$69',
      frameworks: ['nextjs', 'react', 'shadcn']
    },
    {
      id: 'admindek',
      title: 'Admindek HTML Dashboard',
      description: 'Admindek is a complete Bootstrap 5 admin panel with 100s components, different demos and many color skins.',
      image: admindekImg,
      price: '$69',
      frameworks: ['html']
    },
    {
      id: 'architectui',
      title: 'ArchitectUI HTML Pro',
      description: 'ArchitectUI is a clean and modern HTML dashboard template built with Bootstrap 5. It contains a lot of components, layouts, and color themes.',
      image: architectuiImg,
      price: '$69',
      frameworks: ['html']
    },
    {
      id: 'haze',
      title: 'Haze Nuxt Dashboard',
      description: 'Haze is a Nuxt 3 & Vue 3 dashboard template built for developers who love clean and minimal designs, featuring built-in state management and dark mode.',
      image: hazeImg,
      price: '$69',
      frameworks: ['nuxt', 'vue']
    },
    {
      id: 'signal',
      title: 'Signal React Dashboard',
      description: 'Signal is a high-performance React dashboard template designed for real-time analytics, charts, and dark mode dashboards.',
      image: signalImg,
      price: '$69',
      frameworks: ['react', 'tailwind']
    },
    {
      id: 'adminlte-free',
      title: 'AdminLTE v4 Free',
      description: 'The legendary free open-source Bootstrap 5 admin template. Highly customizable, responsive, and feature-rich with a huge ecosystem of plugins and pages.',
      image: freeImg,
      price: 'Free',
      frameworks: ['html', 'free']
    }
  ];

  const filteredProducts = activeFilter === 'all'
    ? products.filter(p => p.id !== 'adminlte-free') // show premium by default
    : products.filter(p => p.frameworks.includes(activeFilter));

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <header className="product-grid-header">
          <h2 className="product-grid-title">Let's take a look at our premium admin dashboard templates</h2>
          <div className="product-grid-subtitle">Browse by Framework</div>
        </header>

        {/* Framework Filter Container */}
        <div className="filter-container">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              {/* Image Asset Wrapper as Browser Mockup */}
              <div className="product-image-wrapper">
                <div className="browser-mockup">
                  <div className="browser-header">
                    <span className="browser-dot red"></span>
                    <span className="browser-dot yellow"></span>
                    <span className="browser-dot green"></span>
                  </div>
                  <div className="browser-content">
                    <img src={product.image} alt={`${product.title} Screenshot`} />
                  </div>
                </div>
              </div>

              {/* Typography Content Block */}
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
              </div>

              {/* Footer Row Layout */}
              <footer className="product-footer">
                <span className="product-price">{product.price}</span>
                <div className="product-actions">
                  <a
                    href="#preview"
                    className="btn-preview"
                    onClick={(e) => e.preventDefault()}
                  >
                    Preview
                  </a>
                  <button
                    className="btn-cart"
                    aria-label="Add to cart"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${product.title} added to cart!`);
                    }}
                  >
                    <svg
                      className="cart-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-container">
          <a
            href="#all-templates"
            className="btn-view-all"
            onClick={(e) => {
              e.preventDefault();
              alert("Loading all premium templates...");
            }}
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};
