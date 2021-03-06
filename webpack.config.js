var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: './dist',
    filename: 'index.js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.elm']
  },

  module: {
    preLoaders: [
      {
        // Notice that the preloader actually reads .elm files looking for dependencies to be compiled from elmx
        test: /\.elm$/,
        loader: 'elmx-webpack-preloader',
        include: [path.join(__dirname, "src")],
        query: {
          sourceDirectories: [path.join(__dirname, "src")],
          outputDirectory: path.join(__dirname, "elm-stuff/build-artifacts/elmx-compile")
        }
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.elmx?$/,
        loader: 'elm-hot!elm-webpack',
        include: [path.join(__dirname, "src"), path.join(__dirname, "elm-stuff/build-artifacts/elmx-compile")]
      }
    ],

    noParse: /\.elmx?$/
  },

  plugins: [
    new CleanWebpackPlugin(['dist', "elm-stuff/build-artifacts/elmx-compile"], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets'}
    ])
  ],

  devServer: {
    stats: 'errors-only',
    port: 8000,
  }
};
