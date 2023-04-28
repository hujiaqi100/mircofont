import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
// import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
// import cleanup from 'rollup-plugin-cleanup';
import image from '@rollup/plugin-image';
const rollupPostcssLessLoader = require("rollup-plugin-postcss-webpack-alias-less-loader");
const gLess = require('./plugin/rollup-less-plugin')
const path = require("path");
// const customResolver = nodeResolve({
//     extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".less", ".css"],
// });
const NODE_MODULE_PATH = path.resolve("./node_modules");

export default {
    input: "./server_render/render.js",
    plugins: [
        // nodeResolve({
        //     jsnext: true,
        //     main: true,
        // }),
        // cleanup(), 
        image(),
        json(),
        // gLess({
        //     entry: path.resolve(__dirname, 'src'),
        //     outPath: path.resolve(__dirname, 'server_render'),
        //     outFileName: 'app.cjs.css'
        // }),
        postcss({
            // loaders: [
            //     rollupPostcssLessLoader({
            //         nodeModulePath: NODE_MODULE_PATH,

            //         aliases: {},
            //     }),
            // ],
            minimize: true,
            // modules: true,
            use: {
                less: true,
            },
        }),

        babel({
            exclude: "/node_modules/**",
            babelHelpers: "runtime",
            plugins: [
                ["@babel/plugin-transform-runtime"],
                // [
                //     "import",
                //     { libraryName: "antd", libraryDirectory: "es", style: "css" },
                // ],
            ],
            presets: [
                "@babel/preset-react",
                [
                    "@babel/preset-typescript",
                    {
                        isTSX: true,
                        allExtensions: true,
                    },
                ],
                [
                    "@babel/env",
                    {
                        modules: false,
                    },
                ],
            ],
            extensions: ["tsx", "ts", "js", "jsx"],
        }),
        commonjs({
            extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
        // terser()
    ],

    external: [
        "react",
        "react-dom",
        // "react-is",
        "lodash",
        "antd",
        "echarts",
        "jquery",
        // "eventemitter3",
        // "qiankun",
        // "@ali/error-center"
    ],
    output: [
        {
            file: './server_render/app.cjs.js',
            // dir: './serverBuild',
            // name : 'render.cjs.js',
            format: 'cjs',
        },
    ]
};