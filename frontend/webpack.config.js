const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const appLogo = './images/pixel-bw.png';
const appName = "JAKOB.WTF";
const appDesc = "Interesting resources and articles about Bitcoin, Nutrition, Health and Psychology";
const developerName = "Jakob Abfalter";
const developerUrl = "Jakob.wtf/about.html";

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
            template: "./src/article-analogy-between-bitcoin-and-chess.html",
            filename: "./article-analogy-between-bitcoin-and-chess.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/article-weston-price-traditional-diets.html",
            filename: "./article-weston-price-traditional-diets.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/article-bitcoin-the-hero.html",
            filename: "./article-bitcoin-the-hero.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/article-towards-a-more-stable-bitcoin.html",
            filename: "./article-towards-a-more-stable-bitcoin.html",
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/article-mystery-of-psychosomatic-symptoms.html",
            filename: "./article-mystery-of-psychosomatic-symptoms.html",
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
        new HtmlWebPackPlugin({
            template: "./src/articles/bitcoin-the-hero-EN.html",
            filename: "./articles/src/bitcoin-the-hero-EN.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/bitcoin-the-hero-DE.html",
            filename: "./articles/src/bitcoin-the-hero-DE.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/towards-a-more-stable-bitcoin-EN.html",
            filename: "./articles/src/towards-a-more-stable-bitcoin-EN.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/towards-a-more-stable-bitcoin-DE.html",
            filename: "./articles/src/towards-a-more-stable-bitcoin-DE.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/mystery-of-psychosomatic-symptoms-DE.html",
            filename: "./articles/mystery-of-psychosomatic-symptoms-DE.html",
            inject: false,
            hash: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/articles/mystery-of-psychosomatic-symptoms-EN.html",
            filename: "./articles/mystery-of-psychosomatic-symptoms-EN.html",
            inject: false,
            hash: true
        }),
        new FaviconsWebpackPlugin({
            logo: appLogo,
            mode: 'webapp',
            devMode: 'webapp',
            prefix: '',
            favicons: {
                appName: appName,
                appDescription: appDesc,
                developerName: developerName,
                developerURL: developerUrl,
                background: '#ddd',
                theme_color: '#333',
                icons: {
                    coast: false,
                    yandex: false
                }
            }
        })
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