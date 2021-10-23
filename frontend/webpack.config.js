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
            }
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
            template: "./src/resources.html",
            filename: "./resources.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/about.html",
            filename: "./about.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/weston-price-traditional-diets-EN.html",
            filename: "./articles/src/weston-price-traditional-diets-EN.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/weston-price-traditional-diets-DE.html",
            filename: "./articles/src/weston-price-traditional-diets-DE.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/analogy-between-bitcoin-and-chess-EN.html",
            filename: "./articles/src/analogy-between-bitcoin-and-chess-EN.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/analogy-between-bitcoin-and-chess-DE.html",
            filename: "./articles/src/analogy-between-bitcoin-and-chess-DE.html",
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
                {
                    from: /^.*.jpg.*$/, to: function (context) {
                        const url = context.parsedUrl.pathname;
                        const split = url.split('/');
                        const jpg = split[split.length-1];
                        return "/" + jpg;
                    }
                },
                {from: /^.*\/de$/, to: '/'},
                {from: /^.*\/en$/, to: '/'}
            ],
            index: '/article.html'
        }
    }
};