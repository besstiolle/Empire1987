const path = require('path');

//const transform_async_to_generator = require('@babel/plugin-transform-async-to-generator');

module.exports = {
    watch: true,
    entry: ['./script/empire.js'],
    module: {
        rules: [
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
