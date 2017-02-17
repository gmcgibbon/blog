module.exports = {
  entry: {
    application: [
      './source/javascripts/main.ts'
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules:    ['node_modules', 'bower_components']
  },
  output: {
    path:     './.webpack-cache',
    filename: 'javascripts/[name].js'
  },
  module: {
    rules: [
        {
          test:    /source\/javascripts\/.*\.ts?$/,
          exclude: /node_modules|bower_components|\.webpack-cache/,
          loader:  'ts-loader'
        }
    ]
  }
}
