const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: argv.mode === 'production' ? 'hidden-source-map' : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  devServer: {
    contentBase: [path.join(__dirname, 'dist')],
    port: 9000,
    hot: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          argv.mode === 'production' ? MiniCssPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/i,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/_data/events.json', to: path.join(__dirname, 'dist/data') },
      ],
    }),
  ],
});
