import React, { Fragment } from 'react';

import PortfolioItem from '../components/PortfolioItem/PortfolioItem';

import styles from './portfolio.module.css';

const PROJECTS = [
  {
    date: '2018 - 2019',
    description:
      'Accounting application for one of the biggest banks in Germany. It allows users to create and send invoices, connect bank accounts, make payments and export data for tax consultant.',
    name: 'VR SmartGuide',
    techStack: ['React', 'Redux', 'Cypress', 'TypeScript', 'Jira'],
  },
  {
    date: '2017 - 2018',
    description:
      'Cryptocurrency exchange with support for tens of currencies including cryptocurrencies and fiat (PLN, USD, EUR). Application allowed users to trade their currencies and see charts in real time.',
    name: 'AbuCoins',
    techStack: [
      'React',
      'Redux',
      'Rxjs',
      'Redux-Observable',
      'Socket.IO',
      'Jira',
    ],
  },
];

const MainPage = () => (
  <Fragment>
    <div className={styles.container}>
      <h1 className={styles.header}>Portfolio</h1>
      <div className={styles.subheader}>
        Below you can find some projects that I worked on.
      </div>
      <div>
        {PROJECTS.map(project => (
          <PortfolioItem project={project} />
        ))}
      </div>
    </div>
  </Fragment>
);

export default MainPage;
