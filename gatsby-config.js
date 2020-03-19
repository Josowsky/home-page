const path = require(`path`);
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  plugins: [
    'gatsby-plugin-netlify',
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#777`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bartek Jozwowiak - Frontend Engineer`,
        short_name: `Frontend Engineer`,
        start_url: `/`,
        background_color: `#777`,
        theme_color: `#00acc9`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Ubuntu:300,400'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    siteUrl: `https://www.bartek-jozwowiak.me`,
  },
};
