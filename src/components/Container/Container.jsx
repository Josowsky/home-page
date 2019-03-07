import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import styles from './container.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.sidebar}>sidevar</div>
    <div className={styles.content}>{children}</div>
  </div>
);

Container.propTypes = {
  children: oneOfType([func, node]),
};

export default Container;
