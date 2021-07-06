import React from 'react';
import { string, oneOfType, node, func } from 'prop-types';

// Extract this button into "components" scope after new page home is ready

import { StyledButton } from './Button.styles';

const Button = ({ children, label }) => (
  <StyledButton>{children || label}</StyledButton>
);

Button.propTypes = {
  children: oneOfType([node, func]),
  label: string,
};

export default Button;
