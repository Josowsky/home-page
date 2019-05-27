import React from 'react';
import SEO from 'components/SEO/SEO';

import BlogPostCard from 'components/BlogPostCard/BlogPostCard';

import { StyledContainer, StyledHeader } from './about.style';

const MainPage = () => (
  <StyledContainer>
    <StyledHeader>Blog</StyledHeader>
    <div>
      <BlogPostCard />
      <BlogPostCard />
    </div>
    <SEO
      title="Blog"
      description="On my blog I write mostly about frontend related stuff like React, Cypress, CSS-in-JS, TypeScript etc."
    />
  </StyledContainer>
);

export default MainPage;
