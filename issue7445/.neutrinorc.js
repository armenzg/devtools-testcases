module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'issue7445'
        }
      }
    ]
  ]
};
