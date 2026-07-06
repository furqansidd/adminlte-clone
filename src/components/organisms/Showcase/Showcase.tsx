import React from 'react';
import './Showcase.css';
import dashboardMain from '../../../assets/dashboard-main.png';
import dashboardAnalytics from '../../../assets/dashboard-analytics.png';
import dashboardWidgets from '../../../assets/dashboard-widgets.png';

export const Showcase: React.FC = () => {
  return (
    <div className="showcase-section">
      <div className="showcase-container">
        {/* Left background screenshot */}
        <div className="showcase-card card-left animate-slide-in-left">
          <img src={dashboardAnalytics} alt="Analytics Dashboard Mockup" className="showcase-img" />
          <div className="showcase-overlay"></div>
        </div>

        {/* Right background screenshot */}
        <div className="showcase-card card-right animate-slide-in-right">
          <img src={dashboardWidgets} alt="Widgets Dashboard Mockup" className="showcase-img" />
          <div className="showcase-overlay"></div>
        </div>

        {/* Center foreground screenshot */}
        <div className="showcase-card card-center animate-zoom-in">
          <img src={dashboardMain} alt="Main Dashboard Mockup" className="showcase-img" />
        </div>
      </div>
    </div>
  );
};
