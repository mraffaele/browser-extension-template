const path = require('path')
const ExtensionReloader = require('webpack-extension-reloader')
const CopyPlugin = require('copy-webpack-plugin')
const baseOptions = require('./webpack.config.base')

const config = {
  ...baseOptions,
  mode: 'development',
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  entry: {
    'content-script': path.join(__dirname, '../src/@content/app.content.tsx'),
    background: path.join(__dirname, '../src/@background/app.background.ts'),
    popup: path.join(__dirname, '../src/@popup/app.popup.tsx')
  },
  target: 'web',
  plugins: [
    ...baseOptions.plugins,
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '../src/static/manifest/manifest.v2.dev.json'), to: path.join(__dirname, '../dist/manifest.json') }
      ]
    }),
    new ExtensionReloader()
  ]
}

module.exports = config
