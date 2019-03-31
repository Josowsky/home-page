import React from 'react';
import { shape, string } from 'prop-types';
import Img from 'gatsby-image';

import styles from './imageBox.module.scss';

const ImageBox = ({ projectImage, projectName }) => (
  <div className={styles.container}>
    <Img
      alt={projectName}
      className={styles.image}
      fluid={projectImage.childImageSharp.fluid}
    />
  </div>
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
