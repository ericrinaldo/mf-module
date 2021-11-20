const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const package = require('./package.json');


module.exports = (_, argv) => ({
  output: {
    clean: true,
    publicPath: `${package.cdn}/${package.name}/${package.version}/`,
    path: __dirname + `/dist/modules/${package.name}/${package.version}`,
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  devServer: {
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          (argv.mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: 'components',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        '.': './src/components',
        './Button': './src/components/Button/Button',
      },
      shared: {
        ...package.dependencies,
        react: {
          singleton: true,
          requiredVersion: package.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: package.dependencies['react-dom'],
        },
      },
    }),
  ],
});
