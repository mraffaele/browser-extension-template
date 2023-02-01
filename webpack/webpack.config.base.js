const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const APP_NAME = require('../src/@shared/helpers/appName.js')

const baseOptions = {
  devtool: false,
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '../src/static/icons'), to: path.join(__dirname, '../dist/icons') },
        { from: path.join(__dirname, '../src/static/images'), 
          to: path.join(__dirname, '../dist/images'),
          globOptions: {
            ignore: ["**/*.gitkeep"]
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({ chunks: ['popup'], title: APP_NAME })
  ]
}

module.exports = baseOptions
