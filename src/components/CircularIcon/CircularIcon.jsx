import React from 'react';
import { func, node, oneOf, oneOfType } from 'prop-types';

import { StyledIcon } from './CircularIcon.style';

const CircularIcon = ({ children, variant = 'blue' }) => (
  <StyledIcon variant={variant}>{children}</StyledIcon>
);

CircularIcon.propTypes = {
  children: oneOfType([func, node]).isRequired,
  variant: oneOf(['blue', 'white']),
};

export default CircularIcon;
