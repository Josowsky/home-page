import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { graphql } from 'gatsby';

import Bio from 'components/Bio/Bio';
import BlogPostCard from 'components/BlogPostCard/BlogPostCard';
import SEO from 'components/SEO/SEO';

import { StyledContainer, StyledBioContainer } from './blog.style';

const MainPage = ({
  data: {
    allContentfulPost: { edges: posts },
    file: {
      childImageSharp: { fixed: avatar },
    },
  },
}) => (
  <StyledContainer>
    <StyledBioContainer>
      <Bio avatar={avatar} />
    </StyledBioContainer>
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
            title: string,
            subtitle: string,
            slug: string,
          }),
        })
      ),
    }),
    file: shape({
      childImageSharp: shape({
        fixed: shape({}),
      }),
    }),
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
    file(absolutePath: { regex: "/avatar/" }) {
      childImageSharp {
        fixed(height: 90, width: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
