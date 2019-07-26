import React, { Fragment } from 'react';
import { shape } from 'prop-types';

import PortfolioItem from 'components/PortfolioItem/PortfolioItem';
import SEO from 'components/SEO/SEO';
import { HeadingLarge, Heading } from 'components/Typography/Typography';
import { StyledContainer } from './PortfolioPage.style';

const PortfolioPage = ({ data }) => {
  const PROJECTS = [
    {
      id: 1,
      date: '2018 - 2019',
      description:
        'Accounting application for a German bank. It allows users to create and send invoices, connect bank accounts, make payments and export data for tax consultant.',
      image: data.smartguide,
      name: 'VR SmartGuide',
      techStack: ['React', 'Redux', 'Cypress', 'TypeScript', 'Webpack'],
    },
    {
      id: 2,
      date: '2018',
      description:
        'Mobile focused web app for browsing move showings in many theatres in Poznań. I was leading the team of two other developers.',
      image: data.gdziekino,
      name: 'Gdzie Kino',
      techStack: ['React', 'Redux', 'Rxjs', 'Node.js', 'Puppeteer', 'Heroku'],
    },
    {
      id: 3,
      date: '2017 - 2018',
      description:
        'Cryptocurrency exchange with support for tens of currencies including cryptocurrencies and fiat (PLN, USD, EUR). Application allowed users to trade their currencies and see charts in real time.',
      image: data.abucoins,
      name: 'AbuCoins',
      techStack: [
        'React',
        'Redux',
        'Rxjs',
        'Redux-Observable',
        'Socket.IO',
        'Webpack',
      ],
    },
    {
      id: 4,
      date: '2017',
      description:
        'CS:GO items trading platform. It allowed users to connect their Steam account and trade items.',
      image: data.skinsjar,
      name: 'Skinsjar',
      techStack: ['AngularJS', 'Gulp', 'Socket.IO', 'Jira'],
    },
  ];

  return (
    <Fragment>
      <StyledContainer>
        <HeadingLarge>Portfolio</HeadingLarge>
        <Heading>Below you can find some projects that I worked on.</Heading>
        <div>
          {PROJECTS.map(project => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      </StyledContainer>
      <SEO
        title="Portfolio"
        description="Here you can check list of projects that I worked on alongside with short descriptions and screenshots"
      />
    </Fragment>
  );
};

PortfolioPage.propTypes = {
  data: shape({
    smartguide: shape({}).isRequired,
    abucoins: shape({}).isRequired,
    skinsjar: shape({}).isRequired,
  }).isRequired,
};

export default PortfolioPage;
