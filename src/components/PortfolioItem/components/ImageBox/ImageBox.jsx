import React from 'react';
import { shape, string } from 'prop-types';

import { StyledContainer, StyledImage } from './ImageBox.style';

const ImageBox = ({ projectImage, projectName }) => (
  <StyledContainer>
    <StyledImage alt={projectName} fluid={projectImage.fluid} />
  </StyledContainer>
);

ImageBox.propTypes = {
  projectImage: shape({
    childImageSharp: shape({
      fluid: shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  projectName: string.isRequired,
};

export default ImageBox;
