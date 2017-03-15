const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => {
  const ExtractSASS = new ExtractTextPlugin(`/styles/${options.cssFileName}`);

  const webpackConfig = {
    devtool: options.devtool,
    entry: [
      //moving to webpack2. including following 2 lines generates error with npm run dev
      //even without these, hot reloading seems to be working fine  
      //`webpack-dev-server/client?http://localhost:${+ options.port}`,
      //'webpack/hot/dev-server',
       Path.join(__dirname, '../src/main'),
    ],
    output: {
      path: Path.join(__dirname, '../dist'),
      filename: `scripts/${options.jsFileName}`,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: Path.join(__dirname, '../src'),
          loader: 'babel-loader'
        },
        { test: /\.css?$/, 
          use: [ 
            'style-loader',
            'css-loader' 
          ]
        },
        { test: /\.(png|jpg)$/, 
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        },
        { test: /\.less$/, 
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        }
      ]
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development'),
        },
      }),
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, '../src/index.html'),
      })
    ],
  };

  if (options.isProduction) {
    webpackConfig.entry = [Path.join(__dirname, '../src/main')];

    webpackConfig.plugins.push(
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
        sourceMap: true
      }),
      ExtractSASS
    );

    webpackConfig.module.rules.push({
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
      })
    });
  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

/*    webpackConfig.module.loaders.push({
      test: /\.css?$/,
      loaders: 'style!css',
    });

    webpackConfig.module.loaders.push({
      test: /\.(png|jpg)$/,
      loaders: 'url-loader?limit=8192',
    });

    webpackConfig.module.loaders.push({
      test: /\.less$/,
      loaders: 'style!css!less',
    });*/

    webpackConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    });

    webpackConfig.devServer = {
      quiet: true,
      contentBase: Path.join(__dirname, '../'),
      hot: true,
      port: options.port,
      inline: true,
      historyApiFallback: true,
      proxy: {
        "**": {
          "target": {
            "host": "localhost",
            "protocol": 'http:',
            "port": 3000
          },
          ignorePath: false,
          changeOrigin: true,
          secure: false
        }
      }
    };
  }
  return webpackConfig;
};
