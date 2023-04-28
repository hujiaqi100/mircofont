const fs = require('fs')
const path = require('path')
module.exports = function (source) {
    const p = path.resolve(__dirname, '../server_render/app.cjs.css')
    fs.appendFileSync(p, source)
    return source
}