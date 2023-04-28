const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        vendors: ['react', 'react-dom', 'lodash']
    },
    output: {
        path: path.resolve('dll'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve('dll/vendors.manifest.json')
        })
    ]
}