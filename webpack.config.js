const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].app.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
