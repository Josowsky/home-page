import React, { Fragment } from 'react';

import { routes } from '../shared/constants';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';

import styles from './index.module.css';

const MainPage = () => (
  <Container>
    <Fragment>
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
    </Fragment>
  </Container>
);

export default MainPage;
