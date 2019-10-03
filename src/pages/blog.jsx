import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { graphql } from 'gatsby';

import { getBlogFormatDate } from 'shared/utils/getBlogFormatDate';
import { getUrlPath } from 'shared/utils/getUrlPath';

import Bio from 'components/Bio/Bio';
import BlogPostCard from 'components/BlogPostCard/BlogPostCard';
import SEO from 'components/SEO/SEO';
import BlogTemplate from 'components/Templates/BlogTemplate';

import { StyledContainer, StyledBioContainer } from 'styles/pages/blog.style';

const BlogPage = ({
  data: {
    allContentfulPost: { edges: posts },
  },
}) => (
  <BlogTemplate>
    <StyledContainer>
      <StyledBioContainer>
        <Bio />
      </StyledBioContainer>
      <div>
        {posts.map(
          ({ node: { id, title, description, createdAt, readingTime } }) => (
            <BlogPostCard
              key={id}
              title={title}
              description={description}
              smallDescription={`${getBlogFormatDate(createdAt)}${readingTime &&
                ` • ${readingTime} min read`}`}
              path={`/blog/${getUrlPath(title)}`}
            />
          )
        )}
      </div>
      <SEO
        title="Blog"
        description="On my blog I write mostly about frontend related stuff like React, Cypress, CSS-in-JS, TypeScript etc."
      />
    </StyledContainer>
  </BlogTemplate>
);

BlogPage.propTypes = {
  data: shape({
    allContentfulPost: shape({
      edges: arrayOf(
        shape({
          node: shape({
            title: string,
            description: string,
            id: string,
            createdAt: string,
            readingTime: number,
          }),
        })
      ),
    }),
  }).isRequired,
};

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
