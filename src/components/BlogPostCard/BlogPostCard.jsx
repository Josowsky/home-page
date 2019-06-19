import React from 'react';
import { string } from 'prop-types';
import { Link } from 'gatsby';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledSmallDescription,
} from './BlogPostCard.style';

const BlogPostCard = ({ title, subtitle, slug }) => (
  <Link to={slug}>
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledSmallDescription>
          May 14, 2019 • 6 min read
        </StyledSmallDescription>
      </StyledHeader>
      <p>{subtitle}</p>
    </StyledContainer>
  </Link>
);

BlogPostCard.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  slug: string.isRequired,
};

export default BlogPostCard;
