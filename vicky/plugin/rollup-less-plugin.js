const fs = require('fs')
const path = require('path')
const searchLessFile = (_path, outFileName) => {
    console.log(_path, '_path');
    fs.readdirSync(_path).forEach(val => {
        const realPath = path.resolve(_path, val)
        // console.log(path.resolve(_path, val));
        if (val.endsWith('.less')) {
            const lessText = fs.readFileSync(realPath, 'utf-8')
            fs.appendFileSync(outFileName, lessText)
        }
        // if (fs.statSync(val).isDirectory) {
        //     searchLessFile(path.resolve(_path, val), outFileName)
        // }
    })
}
const getLess = ({ entry, outPath, outFileName }) => {
    fs.writeFileSync(path.join(outPath, outFileName), '')
    searchLessFile(entry, path.join(outPath, outFileName))
}
module.exports = getLess