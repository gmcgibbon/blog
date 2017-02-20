module.exports = {
  entry: {
    application: [
      './source/javascripts/main.ts'
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
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
          loader:  'ts-loader'
        }
    ]
  }
}
