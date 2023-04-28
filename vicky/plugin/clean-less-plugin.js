const process = require('child_process')
const path = require('path')
class CleanLessPlugin {
    constructor() {
    }
    apply(compiler) {
        compiler.hooks.environment.tap('CleanLessPlugin', (compilation) => {
            const p = path.resolve(__dirname, '../server_render/app.cjs.css')
            process.execSync(`rm -rf ${p}`)
        })
    }
}
module.exports = CleanLessPlugin