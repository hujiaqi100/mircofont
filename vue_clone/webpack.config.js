const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  devServer: {
    port: 3002,
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor.${packageName.replace('@', '')}`;
          },
          priority: -10,
          minChunks: 1,
          maxSize: 200000
        },
        // split: {
        //     test: function (module, chunk) {
        //         return module.resource &&
        //             module.resource.endsWith('.js') &&
        //             module.resource.includes(`react`);
        //     },
        //     priority: -10,
        //     reuseExistingChunk: true,
        //     name: 'split',
        //     enforce: true,
        //     chunks: 'all',
        // },
      }
    },
    minimize: false,
  },
  output: {
    filename: '[name].index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
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
            loader: 'less-loader',
          }
        ],
      },
      {
        test: /\.(png|jpg|woff|woff2?|eot|ttf|otf|svg)$/,
        exclude: /(node_modules)/,
        use: ['url-loader?limit=8192']
      }
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'vueClone',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/bootstrap.js',
      },
      shared: ['vue', 'vue-loader', 'element-ui', 'fastclick', 'vue-awesome-swiper']
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.vue', '.ts', '.tsx', '.js', '.json', '.jsx', '.wasm'],
  }
};
