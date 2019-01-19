const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/js/index.js',
        './src/style/css/base.css',
        './src/style/scss/custom.scss'
    ],
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader'
//                    {loader: 'css-loader', options: {sourceMap: true}}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'sass-loader'
//                    {loader: 'css-loader', options: {sourceMap: true}}
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}