import React from 'react';
import { Link, graphql } from 'gatsby';

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const { previous, next } = this.props.pageContext;

    return (
      <>
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.childContentfulRichText.html,
          }}
        />
        <hr />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </>
    );
  }
}

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
