const { resolveResquest } = require('../util/requestQueue.js')
const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const url = require('url')
const resolveLess = require('../util/replaceTheme.js')
const themeQuery = [
    {
        "type": 'default',
        "path": path.resolve(__dirname, '../src/theme/theme.less')
    },
    {
        "type": 'blue',
        "path": path.resolve(__dirname, '../src/theme/theme-blue.less')
    },
    {
        "type": 'yellow',
        "path": path.resolve(__dirname, '../src/theme/theme-yellow.less')
    }
]
const setTheme = (theme) => {
    const themeFilePath = path.resolve(__dirname, '../public/theme.txt')
    if (!fs.existsSync(themeFilePath)) {
        fs.writeFileSync(themeFilePath, 'default')
        return 'default'
    } else {
        if (!theme) {
            return fs.readFileSync(themeFilePath, 'utf-8')
        } else {
            if (theme instanceof Object) {
                fs.writeFileSync(themeFilePath, 'default')
            }
            fs.writeFileSync(themeFilePath, theme)
            return fs.readFileSync(themeFilePath, 'utf-8')
        }
    }
}
const serverRender = async (req, res) => {
    const cssPath = path.resolve(__dirname, '../server_render/app.cjs.css')
    delete require.cache[require.resolve('../server_render/app.cjs.js')];
    delete require.cache[require.resolve(cssPath)];
    const { render, matchRouters } = require('../server_render/app.cjs.js')
    const cssfile = fs.readFileSync(cssPath, 'utf-8')
    const parse = url.parse(req.url, true)
    const theme = setTheme(parse?.query?.theme)
    const themePath = themeQuery.find(d => d.type === theme)?.path
    const cssStyle = themePath ? resolveLess(themePath) : ''
    const result = matchRouters(req.path)
    const promises = [];
    if (result.length === 0) {
        return
    }
    result.forEach(item => {
        if (_.get(item, 'route.loadData')) {
            promises.push(...item.route.loadData())
        }
    })
    const rR = resolveResquest.setQueue(promises)
    await rR.CarryFun()
    // if (!_.get(rR, 'result', void 0)) {
    //     rR.resetQueue()
    // }
    const sliderData = [
        {
            "default": true,
            "icon-name": 'mushroom',
            "name": 'test根目录',
            'icon-prefix': 'iconfont',
        },
        {
            "default": false,
            "icon-name": 'clover',
            "name": 'test根目录',
            'icon-prefix': 'iconfont',
        }
    ]
    const content = _.get(rR, 'result', void 0)
    const dom = render(req, context = { state: content, currentPath: req.path, sliderData, ssr: true, urlQuery: JSON.stringify(req?.query) })
    // ${cssfile}
    res.send(`
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1,height=device-height"/>
        <link href="https://cdn.bootcdn.net/ajax/libs/antd/4.21.0/antd.css" rel="stylesheet">
            <title>ssr</title>
            <style>
               ${process.env.mode === 'production' && cssfile}
                :root{
                    ${cssStyle}
                }
            </style>
        </head>
        <body>
        <script>
             window.__DataInfo__ = ${JSON.stringify(content)}
             window.currentPath = ${JSON.stringify(req.path)}
             window.sliderData = ${JSON.stringify(sliderData)}
        </script>
            <div id="app">${dom} </div>
            <script src='/dqp/app.js'></script>
        </body>
    </html>
        `)
}
{/* <script src='/dqp/common.js'></script>
<script src='/dqp/other.js'></script>
<script src='/dqp/split.js'></script> */}
module.exports = serverRender