export default {
  target: 'web',

  resolve: {
    extensions: ['.js', '.marko', '.json']
  },

  resolveLoader: {
    modules: ['tools/loaders', 'node_modules'],
  },

  stats: {
    colors: true,
    warnings: true
  }
}
