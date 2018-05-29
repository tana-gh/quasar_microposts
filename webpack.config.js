const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
    const mode = env.dev  ? 'development' :
                 env.prod ? 'production'  :
                            ''
    return {
        mode: mode,
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, `./dist/${mode}/`),
            publicPath: './',
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.json'],
            alias: {
                vue$: 'vue/dist/vue.js',
                quasar: path.resolve(__dirname, './node_modules/quasar-framework/dist/quasar.mat.esm.js'),
                variables: path.resolve(__dirname, './node_modules/quasar-framework/dist/core.variables.styl')
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            stylus: 'vue-style-loader!css-loader!stylus-loader?sourceMap'
                        }
                    }
                },
                {
                    test: /\.css$/,
                    loaders: [
                        'style-loader',
                        'css-loader?sourceMap'
                    ]
                },
                {
                    test: /\.styl$/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'stylus-loader?sourceMap'
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new CopyWebpackPlugin([
                {
                    from: './src/static/*',
                    to: './static/[name].[ext]'
                }
            ])
        ]
    }
}
