const authors = require('./src/data/authors.json');
const books = require('./src/data/books.json');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  authors.forEach((author) => {
    createNode({
      ...author,
      id: createNodeId(`author${author.slug}`),
      parent: null,
      children: [],
      internal: {
        type: 'author',
        content: JSON.stringify(author),
        contentDigest: createContentDigest(author),
      },
    });
  });
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/custom',
    component: require.resolve('./src/templates/custom.js'),
    context: {
      title: 'A custom page',
      meta: {
        description: 'Acustomer page with context',
      },
    },
  });
};
