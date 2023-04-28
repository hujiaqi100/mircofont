const app = require('express')()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
// const _config = config(null, { mode: 'development' })
const complier = webpack(config);
const mid = webpackDevMiddleware(complier, {
    // publicPath: config.output.publicPath,
})
app.use(mid);
app.listen(3002)