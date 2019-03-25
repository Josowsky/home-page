import React from 'react';
import { string } from 'prop-types';

import styles from './imageBox.module.scss';

const ImageBox = ({ projectImageUrl, projectName }) => (
  <div className={styles.container}>
    <img alt={projectName} className={styles.image} src={projectImageUrl} />
  </div>
);

ImageBox.propTypes = {
  projectImageUrl: string.isRequired,
  projectName: string.isRequired,
};

export default ImageBox;
