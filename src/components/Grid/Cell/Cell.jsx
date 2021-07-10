import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './Cell.style';

const Cell = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

Cell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  mobile: PropTypes.number,
  tablet: PropTypes.number,
  desktop: PropTypes.number,
  desktopLarge: PropTypes.number,
  mobileOffset: PropTypes.number,
  tabletOffset: PropTypes.number,
  desktopOffset: PropTypes.number,
  desktopLargeOffset: PropTypes.number,
};

export default Cell;
