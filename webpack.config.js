const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    devtool: 'eval-source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        proxy: {
          '/api': 'http://localhost:3000'
        },
        compress: true,
        port: 8080,
        hot: true
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
                }
            }
        ]
    },

    devServer: {
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname)
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        })
    ]
}