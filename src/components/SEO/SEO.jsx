import React from 'react';
import { string } from 'prop-types';
import { Helmet } from 'react-helmet';

const TITLE_TEMPLATE = '%s - Frontend Web Developer';

const SEO = ({ title = '', description = '' }) => (
  <Helmet title={title} titleTemplate={TITLE_TEMPLATE}>
    <meta name="description" content={description} />
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
  </Helmet>
);

SEO.propTypes = {
  title: string,
  description: string,
};

export default SEO;
