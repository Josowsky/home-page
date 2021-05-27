import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './Cell.style';

const Cell = ({ children, mobile, tablet, desktop, desktopLarge }) => (
  <StyledContainer {...{ mobile, tablet, desktop, desktopLarge }}>
    {children}
  </StyledContainer>
);

Cell.propTypes = {
  children: PropTypes.node,
  mobile: PropTypes.number,
  tablet: PropTypes.number,
  desktop: PropTypes.number,
  desktopLarge: PropTypes.number,
};

export default Cell;
