import React from 'react';

import { StyledContainer, StyledTitle, StyledLink } from './SimpleFooter.style';

const SimpleFooter = () => (
  <StyledContainer>
    <StyledTitle>Social stuff:</StyledTitle>
    <StyledLink
      title="My LinkedIn account"
      href="https://www.linkedin.com/in/bartosz-j%C3%B3zwowiak-46173a114/"
    >
      LinkedIn
    </StyledLink>
    <StyledLink title="My GitHub account" href="https://github.com/Josowsky">
      GitHub
    </StyledLink>
  </StyledContainer>
);

export default SimpleFooter;
