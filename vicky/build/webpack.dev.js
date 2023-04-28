const path = require('path')
const ROOT = path.resolve(__dirname);
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('../package.json')
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    mode: 'development',
    // mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/dqp/',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },

            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT, '../index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
