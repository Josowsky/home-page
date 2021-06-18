import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './Cell.style';

const Cell = ({
  className,
  children,
  mobile,
  tablet,
  desktop,
  desktopLarge,
}) => (
  <StyledContainer {...{ mobile, tablet, desktop, desktopLarge, className }}>
    {children}
  </StyledContainer>
);

Cell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  mobile: PropTypes.number,
  tablet: PropTypes.number,
  desktop: PropTypes.number,
  desktopLarge: PropTypes.number,
};

export default Cell;
