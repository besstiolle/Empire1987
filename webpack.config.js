const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//const transform_async_to_generator = require('@babel/plugin-transform-async-to-generator');

module.exports = {
    entry: {
        index: './src/index.js',    
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',    
          },  
          { 
            test: /\.(tpl|dot)$/, 
            loader: 'dotjs-loader', 
            options: {
                // your custom dot options
              }
          }
        ],    
      },
      plugins: [
        new HtmlWebpackPlugin({    
          title: 'Empire 1987',    
          favicon: './favicon.png',
          template: 'index.html'
        }),    
      ],
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './dist',
        },
        port: 9000
    },  
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
};
