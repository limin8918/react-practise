var path = require('path');
var webpack = require("webpack");
module.exports = {
    dist: {
        plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    },
    options: {
        entry: './src/js/client',
        output: {
            filename: 'main.js',
            path: 'public/js'
        },
        module: {
            loaders: [
                { test: /\.jsx?$/, loader: 'babel-loader',exclude: /(node_modules|web_modules)/ },
              ],
        },
        amd: { jQuery: true },
        resolve:{
            extensions: ["", ".webpack.js", ".web.js", ".js", '.jsx'],
            modulesDirectories: [
                'node_modules'
            ]
        }
    }
};
