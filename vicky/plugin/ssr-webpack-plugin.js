const process = require('child_process')
const path = require('path')
class SsrBuildWebpackPlugin {
    constructor() {
    }
    apply(compiler) {
        compiler.hooks.afterEmit.tap('SsrBuildWebpackPlugin', (compilation) => {
            const path1 = path.resolve(__dirname, '../server_render/app.cjs.js')
            // const path2 = path.resolve(__dirname, '../server_render/app.cjs.css')
            process.execSync(`rm -rf ${path1}`)
            // process.execSync(`rm -rf ${path2}`)
        })
        compiler.hooks.done.tap('SsrBuildWebpackPlugin', (compilation) => {
            const cmd = 'npm run roll'
            process.exec(cmd, function (err, stdout, stderr) {
                console.log('\n\n --- 正在构建ssr build --- \n');
                console.log('ssr build');
                console.log("error" + err);
                console.log("stdout" + stdout);
                console.log("stderr" + stderr);
                console.log(' --- ssr 构建完成 --- ');
            })
            // compilation.assets['copyright.txt'] = {
            //     source: function () {
            //         return 'copyright'
            //     },
            //     size: function () {
            //         return 9
            //     }
            // }
            // cb()
        })
    }
}
module.exports = SsrBuildWebpackPlugin