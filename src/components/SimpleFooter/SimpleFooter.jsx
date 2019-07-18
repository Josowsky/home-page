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
    <StyledLink title="Send me an email" href="mailto:bartosz@jozwowiak.pl">
      Email
    </StyledLink>
  </StyledContainer>
);

export default SimpleFooter;
