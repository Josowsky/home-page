import React from 'react';
import { FaCoffee, FaHeart } from 'react-icons/fa';

import styles from './creditsSection.module.css';

const CreditsSection = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      Made with <FaCoffee className={styles.icon} /> and{' '}
      <FaHeart className={styles.icon} /> by me
    </div>
    <div>Powered by Gatsby</div>
  </div>
);

export default CreditsSection;
