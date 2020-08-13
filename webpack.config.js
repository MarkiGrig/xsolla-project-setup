const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');

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
          MiniCssPlugin.loader,
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
  ],
});
