import { graphql } from 'gatsby';

import AboutPage from 'components/Pages/AboutPage/AboutPage';

export default AboutPage;

export const query = graphql`
  query {
    file(absolutePath: { regex: "/about-banner/" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
