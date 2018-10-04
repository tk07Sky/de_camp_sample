const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': rootPath,
      '~': rootPath,
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
