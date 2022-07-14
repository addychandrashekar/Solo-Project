const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/',
        filename: 'bundle.js'
    },

    devtool: 'eval-source-map',

    devServer: {
        host: 'localhost',
        port: 8080,

        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },

        proxy: {
          '/api':  {
            target: 'http://localhost:3000/',
            secure: false,
          }
        },
        compress: true,
        historyApiFallback: true,
        hot: true,
      },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },

            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '/index.html'),
            filename: 'index.html'
        })
    ]
}