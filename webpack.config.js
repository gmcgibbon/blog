const Webpack = require('webpack');
const Dotenv  = require('dotenv-webpack');
var   helpers = require('./config/helpers');

module.exports = {
  entry: {
    application: [
      './source/javascripts/polyfill.ts',
      './source/javascripts/vendor.ts',
      './source/javascripts/main.ts'
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules:    ['node_modules', 'bower_components']
  },
  output: {
    path:     './.webpack-cache',
    filename: 'javascripts/[name].js'
  },
  module: {
    rules: [
        {
          test:    /source\/javascripts\/.*\.tsx?$/,
          exclude: /node_modules|bower_components|\.webpack-cache/,
          loader:  'awesome-typescript-loader'
        }
    ]
  },
  plugins: [
    new Webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new Dotenv(),
    new Webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./source/javascripts'), // location of your src
      {} // a map of your routes
    )
  ]
}
