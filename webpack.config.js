const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.ts',    
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/,
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',    
            exclude: /node_modules/,
          },  
          //   // "dotjs-loader": "^0.1.0",
       /*   { 
            test: /\.tpl$/, 
            loader: 'dotjs-loader',    
            options: {
                // your custom dot options
              }
          },*/
          {
            test: /\.(tsx?)$/,
            use: 'ts-loader',
            exclude: '/node_modules/',
          },
        ],    
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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
    stats:{
      errorDetails:true
    },
};
