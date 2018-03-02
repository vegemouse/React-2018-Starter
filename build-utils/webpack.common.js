const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPaths = require('./common-paths');

const config = {
  // entry: {
  //   vendor: [], // Vendor modules go here
  // },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
module.exports = config;
