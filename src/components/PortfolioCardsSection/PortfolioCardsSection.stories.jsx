import React from 'react';

import PortfolioCardsSection from './PortfolioCardsSection';
import data from './lib/PortfolioCardsSection.data';

export default {
  title: 'NewHomePage/PortfolioCardsSection',
  component: PortfolioCardsSection,
};

export const Default = () => <PortfolioCardsSection {...data} />;
