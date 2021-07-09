import React from 'react';

import PortfolioCard from './PortfolioCard';
import { StyledContainer } from './PortfolioCard.stories.style';
import data from '../lib/PortfolioCardsSection.data';

export default {
  title: 'NewHomePage/PortfolioCardsSection/PortfolioCard',
  component: PortfolioCard,
};

export const Default = () => (
  <StyledContainer>
    <PortfolioCard {...data.items[1]} />
  </StyledContainer>
);
