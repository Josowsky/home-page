import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell/Cell';

import { StyledContainer } from './Grid.style';

const Grid = ({ children, role, className }) => (
  <StyledContainer {...{ role, className }}>{children}</StyledContainer>
);

Grid.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string,
  className: PropTypes.string,
};

export { Cell };
export default Grid;
