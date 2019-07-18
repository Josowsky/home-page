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

const BlogPostCard = ({ title, description, path, smallDescription }) => (
  <StyledContainer>
    <StyledHeader>
      <Link to={path}>
        <StyledTitle>{title}</StyledTitle>
      </Link>
      <StyledSmallDescription>{smallDescription}</StyledSmallDescription>
    </StyledHeader>
    <StyledDescription>{description}</StyledDescription>
  </StyledContainer>
);

BlogPostCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  path: string.isRequired,
  smallDescription: string.isRequired,
};

export default BlogPostCard;
