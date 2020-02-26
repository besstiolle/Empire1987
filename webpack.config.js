const path = require('path');

//const transform_async_to_generator = require('@babel/plugin-transform-async-to-generator');

module.exports = {
    watch: true,
    entry: ['./script/doT.js','./script/_0tuto.js','./script/_1food.js','./script/_2demography.js',
          './script/_3invest.js','./script/_4lands.js','./script/Tpl.class.js','./script/Game.class.js','./script/User.class.js',
          './script/Market.class.js','./script/Combat.class.js','./script/KB.js','./script/Errors.class.js','./script/Const.class.js',
          './script/empire.js'],
    module: {
        rules: [
          /*  {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }*/
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    /*plugins: [transform_async_to_generator()],*/
    resolve: {
        extensions: [/* '.ts', '.tsx',*/ '.js' ]
    },
    output: {
        publicPath: '/',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'script'),
        port: 9000
    }
};
