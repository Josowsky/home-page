import { graphql } from 'gatsby';

import HomePage from 'components/Pages/HomePage/HomePage';

export default HomePage;

export const query = graphql`
  query {
    file(absolutePath: { regex: "/avatar/" }) {
      childImageSharp {
        fixed(height: 110, width: 110) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
