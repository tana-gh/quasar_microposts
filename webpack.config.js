const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
    const mode = env.dev  ? 'development' :
                 env.prod ? 'production'  :
                            ''
    return {
        mode: mode,
        entry: './src/main.ts',
        output: {
            path: path.resolve(__dirname, `./dist/${mode}/`),
            publicPath: './',
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.json'],
            alias: {
                quasar: path.resolve(__dirname, './node_modules/quasar-framework/dist/quasar.mat.esm.js')
            }
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    },
                    exclude: /node_modules|vue\/src/
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
                template: './html/index.html'
            })
        ]
    }
}
