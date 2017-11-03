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
                test: /\.(js|jsx)$/,
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
                test : /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('public/css/styles.css', { allChunks : true})
    ],

    watch: true
};