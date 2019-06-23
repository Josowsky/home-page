import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { grid, mobileBreakpoint } from 'shared/constants';

import PortfolioItem from 'components/PortfolioItem/PortfolioItem';
import SEO from 'components/SEO/SEO';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  margin-top: ${grid * 4}px;
  margin-bottom: ${grid}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 32px;
  }
`;

const StyledSubheader = styled.h2`
  font-size: 16px;
  margin-bottom: ${grid * 2}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 24px;
    margin-bottom: ${grid * 4}px;
  }
`;

const PortfolioPage = ({ data }) => {
  const PROJECTS = [
    {
      id: 1,
      date: '2018 - 2019',
      description:
        'Accounting application for one of the biggest banks in Germany. It allows users to create and send invoices, connect bank accounts, make payments and export data for tax consultant.',
      image: data.smartguide,
      name: 'VR SmartGuide',
      techStack: ['React', 'Redux', 'Cypress', 'TypeScript', 'Webpack'],
    },
    {
      id: 2,
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
      id: 3,
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
        <StyledHeader>Portfolio</StyledHeader>
        <StyledSubheader>
          Below you can find some projects that I worked on.
        </StyledSubheader>
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

export const query = graphql`
  query {
    smartguide: file(absolutePath: { regex: "/project-smartguide/" }) {
      childImageSharp {
        fluid(maxWidth: 420, maxHeight: 300, cropFocus: WEST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    abucoins: file(absolutePath: { regex: "/project-abucoins/" }) {
      childImageSharp {
        fluid(maxWidth: 420, maxHeight: 300, cropFocus: WEST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skinsjar: file(absolutePath: { regex: "/project-skinsjar/" }) {
      childImageSharp {
        fluid(maxWidth: 420, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PortfolioPage;
