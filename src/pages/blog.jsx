import { graphql } from 'gatsby';

import BlogPage from 'components/Pages/BlogPage/BlogPage';

export default BlogPage;

export const pageQuery = graphql`
  query {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
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
