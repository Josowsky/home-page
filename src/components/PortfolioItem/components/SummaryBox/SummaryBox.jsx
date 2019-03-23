import React from 'react';
import { arrayOf, string } from 'prop-types';

import styles from './summaryBox.module.css';

const SummaryBox = ({ projectDescription, projectName, projectTechStack }) => (
  <div className={styles.container}>
    <h2 className={styles.header}>{projectName}</h2>
    <div className={styles.description}>{projectDescription}</div>
    <div className={styles.techStack}>
      <div className={styles.techStackHeader}>I worked with:</div>
      <div className={styles.techStackList}>
        {projectTechStack.map((tech, index) =>
          index === projectTechStack.length - 1 ? ` ${tech}` : ` ${tech},`
        )}
      </div>
    </div>
  </div>
);

SummaryBox.propTypes = {
  projectDescription: string.isRequired,
  projectName: string.isRequired,
  projectTechStack: arrayOf(string).isRequired,
};

export default SummaryBox;
