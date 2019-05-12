import React, { Fragment } from 'react';
import { func, oneOfType, node } from 'prop-types';

import {
  StyledBorderTop,
  StyledBorderRight,
  StyledBorderBottom,
  StyledBorderLeft,
} from './WithBorders.style';

const WithBorders = ({ children }) => (
  <Fragment>
    <StyledBorderTop />
    <StyledBorderRight />
    <StyledBorderBottom />
    <StyledBorderLeft />
    {children}
  </Fragment>
);

WithBorders.propTypes = {
  children: oneOfType([func, node]).isRequired,
};

export default WithBorders;
