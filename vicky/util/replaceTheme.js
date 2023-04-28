module.exports = (path) => {
    if (!path) return void 0
    const fs = require('fs')
    const themeFile = fs.readFileSync(path, 'utf-8')
    const re = /@/g;
    const newStr = themeFile.replace(re, '--');
    return newStr
}