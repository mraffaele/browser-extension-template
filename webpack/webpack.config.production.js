const path = require('path')
const base = require('./webpack.config.base')
const CopyPlugin = require('copy-webpack-plugin')

const baseOptions = {
  ...base,
  mode: 'production'
}

const contentAndPopupScriptConfig = {
  ...baseOptions,
  entry: {
    'content-script': path.join(__dirname, '../src/@content/app.content.tsx'),
    popup: path.join(__dirname, '../src/@popup/app.popup.tsx')
  },
  target: 'web',
  plugins: [
    ...baseOptions.plugins,
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '../src/static/manifest/manifest.v3.json'), to: path.join(__dirname, '../dist/manifest.json') }
      ]
    })
  ]
}

const backgroundScriptConfig = {
  ...baseOptions,
  entry: {
    background: path.join(__dirname, '../src/@background/app.background.ts')
  },
  target: 'webworker'
}

module.exports = [
  contentAndPopupScriptConfig,
  backgroundScriptConfig
]
