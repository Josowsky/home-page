import React from 'react';

import {
  StyledContainer,
  StyledTitle,
  StyledFaCoffee,
  StyledFaHeart,
} from './CreditsSection.style';

const CreditsSection = () => (
  <StyledContainer>
    <StyledTitle>
      Made with <StyledFaCoffee /> and <StyledFaHeart />
    </StyledTitle>
  </StyledContainer>
);

export default CreditsSection;
