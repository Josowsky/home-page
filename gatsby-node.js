const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/components/BlogPost/BlogPost.jsx`);
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const {
      data: {
        allContentfulPost: { edges: posts },
      },
    } = result;

    posts.forEach(({ node: { id, title } }) => {
      createPage({
        path: `blog/${encodeURIComponent(title.split(' ').join('-'))}`,
        component: blogPost,
        context: {
          id,
        },
      });
    });

    return null;
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
