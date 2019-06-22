import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { graphql } from 'gatsby';

import { getBlogFormatDate } from 'shared/utils/getBlogFormatDate';
import { getUrlPath } from 'shared/utils/getUrlPath';

import Bio from 'components/Bio/Bio';
import BlogPostCard from 'components/BlogPostCard/BlogPostCard';
import SEO from 'components/SEO/SEO';

import { StyledContainer, StyledBioContainer } from './blog.style';

const MainPage = ({
  data: {
    allContentfulPost: { edges: posts },
  },
}) => (
  <StyledContainer>
    <StyledBioContainer>
      <Bio />
    </StyledBioContainer>
    <div>
      {posts.map(({ node: { id, title, description, createdAt } }) => (
        <BlogPostCard
          key={id}
          title={title}
          description={description}
          smallDescription={`${getBlogFormatDate(createdAt)} • 6 min read`}
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
            createdAt: string,
          }),
        })
      ),
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
          createdAt
        }
      }
    }
  }
`;
