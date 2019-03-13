import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';

import styles from './container.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.menu}>
      <Menu />
    </div>
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

Container.propTypes = {
  children: oneOfType([func, node]),
};

export default Container;
