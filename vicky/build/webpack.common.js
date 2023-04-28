const path = require('path')
// const CleanWebpack = require('clean-webpack-plugin')
const LodashWebpack = require('lodash-webpack-plugin')
const webpack = require('webpack')
const ROOT = path.resolve(__dirname);
const devConfig = require('./webpack.dev')
const { VueLoaderPlugin } = require("vue-loader");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const prodConfig = require('./webpack.prod')
const webpackMerge = require('webpack-merge')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { ModuleFederationPlugin } = require("webpack").container
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
// const AddAssetHtml = require('add-asset-html-webpack-plugin')
const _ = require('lodash')
// const HappyPack = require('happypack')
// const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');
// const WorkBox = require('workbox-webpack-plugin')
// const handler = (percentage, message, ...args) => {
//     console.info(Math.round(percentage * 100) + '%', message, ...args);
// };
const CompressionPlugin = require('compression-webpack-plugin');
const commonConfig = {
    // entry: {
    //     app: path.resolve(__dirname, '../src/index.js')
    // },
    performance: false,
    // devServer: {
    //     hot: true
    // },
    // optimization: {
    //     usedExports: true,
    //     // splitChunks: {
    //     //     chunks: 'all',
    //     //     maxInitialRequests: 10,
    //     //     // maxSize: 200000,
    //     //     cacheGroups: {
    //     //         // vendor: {
    //     //         //     test: /[\\/]node_modules[\\/]/,
    //     //         //     name(module) {
    //     //         //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    //     //         //         return `vendor.${packageName.replace('@', '')}`;
    //     //         //     },
    //     //         //     priority: -10,
    //     //         //     minChunks: 1,
    //     //         //     maxSize: 200000
    //     //         // },
    //     //         // default: {
    //     //         //     minChunks: 2,
    //     //         //     priority: -20,
    //     //         //     reuseExistingChunk: true
    //     //         // }
    //     //         // split: {
    //     //         //     test: function (module, chunk) {
    //     //         //         return module.resource &&
    //     //         //             module.resource.endsWith('.js') &&
    //     //         //             module.resource.includes(`react`);
    //     //         //     },
    //     //         //     priority: -10,
    //     //         //     reuseExistingChunk: true,
    //     //         //     name: 'split',
    //     //         //     enforce: true,
    //     //         //     chunks: 'all',
    //     //         // },
    //     //     }
    //     // },
    //     minimize: true,
    // },
    plugins: [
        new CompressionPlugin({
            filename: '[path].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.ttf$|\.eot$|\.woff$/,
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false
        }),
        // new AddAssetHtml({
        //     filepath: path.resolve(ROOT, '../dll/vendors.dll.js')
        // }),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(ROOT, '../dll/vendors.manifest.json')
        // }),

        // new CleanWebpack(['dist'], {
        //     root: path.resolve(ROOT, '../')
        // }),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: "app",
            remotes: {
                vueClone: "vueClone@[vueCloneUrl]/remoteEntry.js",
                netfixClone: "netfixClone@[netfixCloneUrl]/remoteEntry.js",
                reactClone: "reactClone@[reactCloneUrl]/remoteEntry.js"
            },
        }),
        new ExternalTemplateRemotesPlugin(),

        // new ExternalTemplateRemotesPlugin(),
        // new LodashWebpack(),
        // new webpack.ProgressPlugin(),
        // new NodePolyfillPlugin(),
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
        // }),
        // new WorkBox.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
        // new HappyPack({
        //     id: 'babel',
        //     use: ['babel-loader']
        // }),
        // new ESBuildPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader: 'vue-loader'
            },
            {
                test: /\.ts[x]?$/,
                exclude: /(node_modules)/,
                use: ['ts-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                // use: ['happypack/loader?id=babel']
                use: ['babel-loader'],
            },
            // {
            //     test: /\.(js|jsx)$/,
            //     loader: 'esbuild-loader',
            //     options: {
            //         loader: 'jsx',
            //         target: 'es2015',
            //         jsxFactory: 'React.createElement',
            //         jsxFragment: 'React.Fragment'
            //     },
            // },
            // {
            //     test: /\.(js|jsx)$/,
            //     loader: 'esbuild-loader',
            //     options: {
            //         loader: 'jsx',
            //         target: 'es2015',
            //         jsx: 'automatic',
            //     },
            // },
            {
                test: /\.(png|jpg|woff|woff2?|eot|ttf|otf|svg)$/,
                exclude: /(node_modules)/,
                use: ['url-loader?limit=8192']
            }
        ],

    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.wasm'],
        alias: {
            '@': ROOT + '/src'
        }
    }
}
module.exports = (env, args) => {
    const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
    const smp = new SpeedMeasurePlugin();

    if (_.get(args, 'mode', '') === 'production') {
        return smp.wrap(webpackMerge(commonConfig, prodConfig))
    } else {
        return webpackMerge(commonConfig, devConfig)
    }
}
