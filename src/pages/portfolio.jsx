import React from 'react';
import { arrayOf, number, string, shape } from 'prop-types';
import { graphql } from 'gatsby';

import PortfolioItem from 'components/PortfolioItem/PortfolioItem';
import SEO from 'components/SEO/SEO';
import HomePageTemplate from 'components/Templates/HomePageTemplate';
import { HeadingLarge, Heading } from 'components/Typography/Typography';

import { StyledContainer } from 'styles/pages/portfolio.style';

const PortfolioPage = ({ data }) => (
  <HomePageTemplate>
    <StyledContainer>
      <HeadingLarge>Portfolio</HeadingLarge>
      <Heading>Below you can find some projects that I worked on.</Heading>
      <div>
        {data.allContentfulPortfolioItem.edges.map(({ node: project }) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </StyledContainer>
    <SEO
      title="Portfolio"
      description="Here you can check list of projects that I worked on alongside with short descriptions and screenshots"
    />
  </HomePageTemplate>
);

PortfolioPage.propTypes = {
  data: shape({
    allContentfulPortfolioItem: shape({
      edges: arrayOf(
        shape({
          node: shape({
            name: string,
            description: string,
            id: string,
            date: string,
            techStack: number,
            image: shape({}),
          }),
        })
      ),
    }),
  }).isRequired,
};

export default PortfolioPage;

export const query = graphql`
  query {
    allContentfulPortfolioItem {
      edges {
        node {
          id
          date
          description
          name
          techStack
          image {
            fluid(maxWidth: 420, maxHeight: 300) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
