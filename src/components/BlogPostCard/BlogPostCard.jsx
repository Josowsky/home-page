import React from 'react';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledSmallDescription,
} from './BlogPostCard.style';

const BlogPostCard = () => (
  <StyledContainer>
    <StyledHeader>
      <StyledTitle>CSS-in-JS with styled-components and others</StyledTitle>
      <StyledSmallDescription>May 14, 2019 • 6 min read</StyledSmallDescription>
    </StyledHeader>
    <p>
      What is css-in-js, what problems it’s trying to solve and how it’s
      actually works under the hood. Deep dive into css-in-js based on
      styled-components and other libraries.
    </p>
  </StyledContainer>
);

export default BlogPostCard;
