const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 4202,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  mode: 'development',
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: 'index.html'
    }),
    new ModuleFederationPlugin({
      name: 'productComponent',
      filename: 'remoteEntry.js',
      exposes: {
        './timeline': './component/timeline.component.js',
        './test': './component/test.component.js'
      },
      shared: ['lit-element', '@ui5/webcomponents', '@ui5/webcomponents-fiori']
    }),
  ],
};
