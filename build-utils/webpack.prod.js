const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonPaths = require('./common-paths');

module.exports = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    // We want to create the JavaScript bundles under a
    // 'static' directory
    filename: 'static/[name].[hash].js',
  },
  // Change to production source maps
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|wav|mp3)$/,
        loader: "file-loader",
        options: {
          outputPath: '/static/assets/media'
        }
      },
      {
        test: /\.(woff|ttf)$/,
        loader: "file-loader",
        options: {
          outputPath: '/static/assets/fonts'
        }
      },
      {
        test: /\.css$/,
        // We configure 'Extract Text Plugin'
        use: ExtractTextPlugin.extract({
          // loader that should be used when the
          // CSS is not extracted
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                // Allows to configure how many loaders
                // before css-loader should be applied
                // to @import(ed) resources
                importLoaders: 1,
                camelCase: true,
                // Create source maps for CSS files
                sourceMap: true
              }
            },
            {
              // PostCSS will run before css-loader and will
              // minify and autoprefix our CSS rules. We are also
              // telling it to only use the last 2
              // versions of the browsers when autoprefixing
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    // Create the stylesheet under 'styles' directory
    new ExtractTextPlugin({
      filename: 'styles/styles.[contenthash].css',
      allChunks: true
    })
  ]
};
