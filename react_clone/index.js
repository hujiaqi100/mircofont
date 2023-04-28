const app = require('express')()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
// const _config = config(null, { mode: 'development' })
const history = require('connect-history-api-fallback');
const complier = webpack(config);
app.use(history({
    verbose: true,
    // index: '/index.html'
}))
const mid = webpackDevMiddleware(complier, {
    // publicPath: config.output.publicPath,
})

app.use(mid);
app.listen(3001)