import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell/Cell';

import { StyledContainer } from './Grid.style';

const Grid = ({ children, role }) => (
  <StyledContainer {...{ role }}>{children}</StyledContainer>
);

Grid.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string,
};

export { Cell };
export default Grid;
