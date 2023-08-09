const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === 'development'
        ? 'http://localhost:3002/'
        : 'https://maximepeterburg.github.io/MF2-mf-rtk/'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },

  devServer: {
    port: 3002,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'MF2',
      filename: 'remoteEntry.js',
      remotes: {
        Shell: 'Shell@https://maximepeterburg.github.io/Shell-mf-rtk/remoteEntry.js'
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        }
      }
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
});
