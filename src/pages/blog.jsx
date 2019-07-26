import { graphql } from 'gatsby';

import BlogPage from 'components/Pages/BlogPage/BlogPage';

export default BlogPage;

export const pageQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
          title
          description
          createdAt
          readingTime
        }
      }
    }
  }
`;
