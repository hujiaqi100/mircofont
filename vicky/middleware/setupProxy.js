const request = require('request')
const proxyJSON = require('../src/proxy.json')
const config = require('../config.js')
const _ = require('lodash')
const findBackEndAddr = (path) => {
    let host;
    const instance = config().backend
    const tmp = path.split('\/').filter(Boolean)
    Object.keys(instance).forEach((val, idx) => {
        if (tmp.length > 0 && tmp[0] === val) {
            host = instance[val]
        }
    })
    return host
}
const findRequestPath = (path) => {
    const tmp = path.split('\/').filter(Boolean)
    if (tmp.length > 1) {
        return _.get(proxyJSON, `${tmp[0]}.${tmp[1]}`, void 0)
    }
    return void 0
}
module.exports = function (app) {
    app.use((req, res, next) => {
        if (req.path === '/favicon.ico') next()
        const host = findBackEndAddr(req.path)
        const path = findRequestPath(req.path)
        if (host && path) {
            request.get(host + path, (err, data) => {
                res.send(data?.body ?? null)
            })
        }
        else {
            next()
        }
    })
}