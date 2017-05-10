const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.development')

/* eslint-disable no-console, no-unused-vars, consistent-return */
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  lazy: false,
  noInfo: false,
  quiet: false,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  },
  historyApiFallback: true,
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    return console.log(err)
  }
  console.log('Listening at http://localhost:3000/')
})
