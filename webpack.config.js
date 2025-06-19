const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: '404.html',
      inject: false, // Don't inject JS bundle into static HTML files
    }),
    new HtmlWebpackPlugin({
      template: './src/cookie-policy.html',
      filename: 'cookie-policy.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/legal.html',
      filename: 'legal.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/privacy-policy.html',
      filename: 'privacy-policy.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/terms-of-service.html',
      filename: 'terms-of-service.html',
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        type: 'asset/resource'
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname),
        publicPath: '/',
      }
    ],
    compress: true,
    port: 9000,
    open: true,
  },
};
