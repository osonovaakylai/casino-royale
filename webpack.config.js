const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    entry: './src/index.tsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
      clean: true,
      publicPath: isDev ? '/' : '/casino-royale',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },

    devtool: isDev ? 'inline-source-map' : false,

    devServer: {
      static: [
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'public'),
      ],
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
