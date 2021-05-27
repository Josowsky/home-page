module.exports = {
  stories: ['../src/**/*.stories.@(jsx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
  ],
  babel: async options => ({
    ...options,
    env: {
      ...(options.env || {}),
      development: {
        plugins: [
          ['styled-components', { displayName: true, preprocess: false }],
        ],
      },
      production: {
        plugins: [
          ['styled-components', { displayName: true, preprocess: false }],
        ],
      },
    },
    plugins: [
      ...(options.plugins || []),
      ['styled-components', { displayName: true, preprocess: false }],
    ],
  }),
};
