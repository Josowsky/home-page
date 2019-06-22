import React from 'react';
import { func, node, string, oneOfType } from 'prop-types';
import { Link } from '@reach/router';

import { StyledContainer, StyledArrow, StyledLabel } from './BioLink.style';

const BioLink = ({ children, title, path }) => (
  <Link to={path} title={title}>
    <StyledContainer>
      <StyledArrow />
      <StyledLabel>{children}</StyledLabel>
    </StyledContainer>
  </Link>
);

BioLink.propTypes = {
  children: oneOfType([func, node]),
  title: string,
  path: string.isRequired,
};

export default BioLink;
