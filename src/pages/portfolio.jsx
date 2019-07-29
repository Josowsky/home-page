import { graphql } from 'gatsby';

import PorfolioPage from 'components/Pages/PortfolioPage/PortfolioPage';

export default PorfolioPage;

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
