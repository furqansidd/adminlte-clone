import React from 'react';
import './Hero.css';
import { Heading } from '../../atoms/Heading/Heading';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <Heading level={1} className="hero-title animate-fade-in">
          AdminLTE Bootstrap Admin Dashboard Template
        </Heading>
        <Text variant="muted" className="hero-subtitle animate-fade-in-delayed">
          Best open source admin dashboard & control panel theme. Built on top of Bootstrap, AdminLTE provides a range of responsive, reusable, and commonly used components.
        </Text>
        <div className="hero-buttons animate-fade-in-delayed-more">
          <Button variant="outline" size="md">
            Download
          </Button>
          <Button variant="outline" size="md">
            Live Preview
          </Button>
          <Button variant="outline" size="md">
            Go Pro
          </Button>
          <Button variant="outline" size="md">
            Docs
          </Button>
        </div>
      </div>
    </section>
  );
};
