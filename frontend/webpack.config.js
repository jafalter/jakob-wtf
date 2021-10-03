const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/article.html",
            filename: "./article.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/WestonPrice.html",
            filename: "./articles/src/WestonPrice.html",
            inject: false,
            hash: true
        }),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: {
            rewrites: [
                {from: /^.*bundle.js.*$/, to: '/bundle.js'},
                {from: /^.*main.css.*$/, to: '/main.css'},
                {
                    from: /^.*.png.*$/, to: function (context) {
                        const url = context.parsedUrl.pathname;
                        const split = url.split('/');
                        const png = split[split.length-1];
                        return "/" + png;
                    }
                },
                {from: /^.*\/de$/, to: '/'},
                {from: /^.*\/en$/, to: '/'}
            ],
            index: '/article.html'
        }
    }
};