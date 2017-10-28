var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, 'src/main.js'),

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'public/js'),
        publicPath: '/public/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: [
                        [
                            'transform-react-jsx', {
                                'pragma': 'h'
                            }
                        ]
                    ]
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("css/styles.css")
    ],

    watch: true
};