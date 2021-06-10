import React from 'react';

import {
  StyledContainer,
  StyledBubbleIcon,
  StyledTopContainer,
  StyledTitle,
  StyledSubtitle,
  StyledBottomText,
} from './HeroLogo.style';

const HeroLogo = () => (
  <StyledContainer>
    <StyledTopContainer>
      <StyledBubbleIcon />
      <StyledTitle>Hello there,</StyledTitle>
      <StyledSubtitle>I am Bartosz.</StyledSubtitle>
    </StyledTopContainer>
    <StyledBottomText>Web Engineer</StyledBottomText>
  </StyledContainer>
);

export default HeroLogo;
