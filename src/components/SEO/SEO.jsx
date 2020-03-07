import React from 'react';
import { shape, string } from 'prop-types';
import { Helmet } from 'react-helmet';
import { Location } from '@reach/router';
import { StaticQuery, graphql } from 'gatsby';

const TITLE_TEMPLATE = '%s - Frontend Engineer';

const SEO = ({
  title = '',
  description = '',
  imageUrl = '',
  location: { pathname },
}) => (
  <StaticQuery
    query={graphql`
      query {
        file(absolutePath: { regex: "/sidebar/" }) {
          publicURL
        }
      }
    `}
    render={({ file: defaultImage }) => (
      <Helmet title={title} titleTemplate={TITLE_TEMPLATE}>
        <html lang="en" />
        <meta name="description" content={description} />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={imageUrl || defaultImage.publicURL} />

        <meta property="og:url" content={pathname} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={imageUrl || defaultImage.publicURL}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={imageUrl || defaultImage.publicURL}
        />
      </Helmet>
    )}
  />
);

SEO.propTypes = {
  title: string,
  description: string,
  imageUrl: string,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

export default props => (
  <Location>{locationProps => <SEO {...locationProps} {...props} />}</Location>
);
