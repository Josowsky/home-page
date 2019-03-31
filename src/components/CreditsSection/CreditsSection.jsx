import React from 'react';
import { FaCoffee, FaHeart } from 'react-icons/fa';

import styles from './creditsSection.module.scss';

const CreditsSection = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      Made with <FaCoffee className={styles.icon} /> and{' '}
      <FaHeart className={styles.icon} />
    </div>
    <div>Powered by Gatsby</div>
  </div>
);

export default CreditsSection;
