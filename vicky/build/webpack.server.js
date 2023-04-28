const path = require('path')
module.exports = {
    target: 'node',
    mode: 'production',
    entry: path.resolve(__dirname, '../server.js'),
    output: {
        path: path.resolve(__dirname, '../out'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                use: ['ts-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader?limit=8192']
            },
            {
                test: /\.css$/i,
                use: ["isomorphic-style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'isomorphic-style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ],
            }
        ],

    },
}
