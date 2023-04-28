const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SsrBuildWebpackPlugin = require('../plugin/ssr-webpack-plugin')
const CleanLessPlugin = require('../plugin/clean-less-plugin')
const path = require('path')
// const webpack = require('webpack')
module.exports = {
	// mode: 'development',
	mode: process.env.mode,
	entry: {
		app: path.resolve(__dirname, '../src/index.js')
	},
	output: {
		publicPath: '/dqp/',
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	module: {
		rules: [{
			test: /\.less$/,
			use: [
				// MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'postcss-loader',
				{
					loader: path.resolve(__dirname, '../loader/write-less-rollup.js')
				},
				'less-loader',
				{
					loader: path.resolve(__dirname, '../loader/less-css.js')
				},
			]
		},

		{
			test: /\.css$/,
			use: [
				// MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader',
				{
					loader: path.resolve(__dirname, '../loader/write-less-rollup.js')
				},
			]
		}]
	},
	// optimization: {
	// 	minimizer: [new OptimizeCSSAssetsPlugin({})]
	// },
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: 'common.css',
		// 	chunkFilename: 'common.chunk.css'
		// }),
		new SsrBuildWebpackPlugin(),
		new CleanLessPlugin()
	]
}
