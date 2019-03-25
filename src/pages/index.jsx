import React from 'react';

import { routes } from '../shared/constants';
import Button from '../components/Button/Button';

import styles from './index.module.scss';

const MainPage = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      Hello, my name is Bartek, I create modern web apps in JavaScript and I
      love what I do.
    </div>
    <div className={styles.buttons}>
      <Button className={styles.button} label="About" to={routes.about} />
      <Button
        className={styles.button}
        label="Portfolio"
        to={routes.portfolio}
      />
    </div>
  </div>
);

export default MainPage;
