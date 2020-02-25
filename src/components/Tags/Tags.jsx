import React from 'react';
import { arrayOf, string } from 'prop-types';

import {
  StyledContainer,
  StyledHeader,
  StyledTagsContainer,
  StyledTag,
} from './Tags.style';

const Tags = ({ tags = [] }) => (
  <StyledContainer>
    <StyledHeader>Tags</StyledHeader>
    <StyledTagsContainer>
      {tags.map(tag => (
        <StyledTag>{tag}</StyledTag>
      ))}
    </StyledTagsContainer>
  </StyledContainer>
);

Tags.propTypes = {
  tags: arrayOf(string).isRequired,
};

export default Tags;
