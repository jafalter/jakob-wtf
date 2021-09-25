const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            hash: true
        }),
    ],
    devServer: {
        port: 3000
    }
};