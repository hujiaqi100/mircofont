const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./build/webpack.common.js');
const _config = config(null, { mode: 'development' })
const history = require('connect-history-api-fallback');
const complier = webpack(_config);
// const proxy = require('express-http-proxy');
const proxy = require('./middleware/setupProxy.js')
const routerList = require('./mockData/testData.js')
const app = express();
app.use(routerList)
app.use(history({
    verbose: true,
    index: '/dqp/index.html'
}))
const mid = webpackDevMiddleware(complier, {
    publicPath: _config.output.publicPath,
})
app.use(mid);
proxy(app)
// app.use('/dqp/api', proxy('http://localhost:3001', {
//     proxyReqPathResolver: function (req) {
//         return req.url;
//     }
// }
// ));
app.listen(80, () => {
    console.log(
        ('\n' + 'http://localhost:3000/dqp              '
            +
            '\t\t\n\n' + `正在启动${3000}端口服务               `
        )
    )
}
);
