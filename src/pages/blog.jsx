import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { graphql } from 'gatsby';

import BlogPostCard from 'components/BlogPostCard/BlogPostCard';
import SEO from 'components/SEO/SEO';

import { StyledContainer } from './blog.style';

const MainPage = ({
  data: {
    allContentfulPost: { edges: posts },
  },
}) => (
  <StyledContainer>
    <div>
      {posts.map(({ node }) => (
        <BlogPostCard
          key={node.slug}
          title={node.title}
          subtitle={node.subtitle}
          slug={node.slug}
        />
      ))}
    </div>
    <SEO
      title="Blog"
      description="On my blog I write mostly about frontend related stuff like React, Cypress, CSS-in-JS, TypeScript etc."
    />
  </StyledContainer>
);

MainPage.propTypes = {
  data: shape({
    allContentfulPost: shape({
      edges: arrayOf(
        shape({
          node: shape({
            title: string.isRequired,
            subtitle: string.isRequired,
            slug: string.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MainPage;

export const pageQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          slug
        }
      }
    }
  }
`;
