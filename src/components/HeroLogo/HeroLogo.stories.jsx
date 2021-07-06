import React from 'react';

import HeroLogo from './HeroLogo';

import { StyledContainer } from './HeroLogo.stories.style';

export default {
  title: 'NewHomePage/HeroLogo',
  component: HeroLogo,
};

export const Default = () => (
  <StyledContainer>
    <HeroLogo />
  </StyledContainer>
);
