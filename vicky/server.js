const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./build/webpack.common.js');
const _config = config(null, { mode: 'production' })
// const _config = config(null, { mode: 'development' })
const complier = webpack(_config);
const serverRender = require('./middleware/serverRender')
const path = require('path')
const fs = require('fs')
const proxy = require('./middleware/setupProxy.js')
const routerList = require('./mockData/testData.js')
process.env.mode = 'production'
var compress = require('compression');
app.use(compress());
app.use('/dqp', express.static('font'))
const mid = webpackDevMiddleware(complier, {
    publicPath: _config.output.publicPath,
})
app.use(mid);
app.use(routerList)
app.get('/dqp', (req, res) => {
    res.redirect('/dqp/mushroom')
})
// app.use(express.static('dist'))
let timer = null;
app.use((req, res, next) => {
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
        try {
            let dir = fs.readdirSync(path.resolve(__dirname, 'server_render'))
            if ((dir || []).some(d => d === 'app.cjs.js') && (dir || []).some(d => d === 'app.cjs.css')) {
                clearInterval(timer)
                timer = null
                next()
            }
        } catch (error) {
            timer = null
            clearInterval(timer)
                (error);
        }
    }, 100)
})
proxy(app)
app.use(serverRender)
app.listen(80, () => {
    (
        ('\n\n' + 'http://localhost:80/dqp              '
            +
            '\t\t\n\n' + `正在启动${3000}端口服务               `
        )
    )
}
);
