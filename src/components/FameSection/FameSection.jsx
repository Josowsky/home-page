import React, { Fragment } from 'react';
import { arrayOf, node, shape, string } from 'prop-types';

import styles from './fameSection.module.css';

const FameSection = ({ icons }) => (
  <div className={styles.container}>
    {icons.map((icon, index) => (
      <Fragment>
        {index > 0 && <div className={styles.dot} />}
        <a className={styles.icon} href={icon.link}>
          {icon.image}
        </a>
      </Fragment>
    ))}
  </div>
);

FameSection.propTypes = {
  icons: arrayOf(
    shape({
      link: string.isRequired,
      image: node.isRequired,
    })
  ).isRequired,
};

export default FameSection;
