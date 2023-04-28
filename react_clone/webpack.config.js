const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const lib = require('./package.json')
module.exports = {
  entry: {
    reactclone: './src/app.js',
  },
  mode: 'development',
  output: {
    filename: 'react.[hash].js',
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
      name: 'reactClone',
      filename: 'remoteEntry.js',
      exposes: {
        './reactClone': './src/react.jsx',
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename : 'index.html'
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.wasm'],
  }
};
