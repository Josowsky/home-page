import { graphql } from 'gatsby';

import PorfolioPage from 'components/Pages/PortfolioPage/PortfolioPage';

export default PorfolioPage;

export const query = graphql`
  query {
    smartguide: file(absolutePath: { regex: "/project-smartguide/" }) {
      childImageSharp {
        fluid(maxWidth: 420, maxHeight: 300, cropFocus: WEST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gdziekino: file(absolutePath: { regex: "/project-gdziekino/" }) {
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
