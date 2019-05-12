import React from 'react';
import { string } from 'prop-types';

import { StyledButton } from './Button.style';

const Button = ({ className = '', label, to }) => (
  <StyledButton to={to} className={className}>
    {label}
  </StyledButton>
);

Button.propTypes = {
  className: string.isRequired,
  label: string.isRequired,
  to: string.isRequired,
};

export default Button;
