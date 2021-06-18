import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './PageSection.style';

const PageSection = ({ className, children }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

PageSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PageSection;
