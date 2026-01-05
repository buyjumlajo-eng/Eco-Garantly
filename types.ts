
import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface EcosystemNodeProps {
  logo: string;
  label: string;
  description: string;
  position: 'left' | 'right' | 'bottom';
}
