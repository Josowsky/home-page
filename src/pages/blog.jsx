import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { graphql } from 'gatsby';

import { getUrlPath } from 'shared/utils/getUrlPath';

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
      {posts.map(({ node: { id, title, description } }) => (
        <BlogPostCard
          key={id}
          title={title}
          description={description}
          path={`/blog/${getUrlPath(title)}`}
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
            description: string,
            id: string,
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
          id
          title
          description
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
