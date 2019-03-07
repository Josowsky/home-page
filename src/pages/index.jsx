import React from 'react';

import Button from '../components/Button/Button';

import styles from './index.module.css';

const MainPage = () => (
  <div className={styles.container}>
    <div className={styles.sidebar}>sidebar goes here</div>
    <div className={styles.content}>
      <div className={styles.header}>
        Hello, my name is Bartek, I create modern web apps in JavaScript and I
        love what I do.
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button} label="About" to="/about" />
        <Button className={styles.button} label="Portfolio" to="/portfolio" />
      </div>
    </div>
  </div>
);

export default MainPage;
