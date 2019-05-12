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
    <div>Powered by Gatsby</div>
  </StyledContainer>
);

export default CreditsSection;
