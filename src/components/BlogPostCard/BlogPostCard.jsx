import React from 'react';
import { string } from 'prop-types';
import { Link } from 'gatsby';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledSmallDescription,
  StyledDescription,
} from './BlogPostCard.style';

const BlogPostCard = ({ title, subtitle, slug }) => (
  <StyledContainer>
    <StyledHeader>
      <Link to={slug}>
        <StyledTitle>{title}</StyledTitle>
      </Link>
      <StyledSmallDescription>May 14, 2019 • 6 min read</StyledSmallDescription>
    </StyledHeader>
    <StyledDescription>{subtitle}</StyledDescription>
  </StyledContainer>
);

BlogPostCard.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  slug: string.isRequired,
};

export default BlogPostCard;
