//arquivo webpack é um arquivo que será interpretado pelo NodeJs
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //extrair o css para uma página específica
const OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const FileLoader = require('file-loader')

module.exports = {
    mode: modoDev ? 'development':'production', 
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public', //jogar o build para dentro da pasta /public 
    },

    devServer: {
        contentBase: "./public",
        port: 9000
    },

    optimization: {
        minimizer: [

            new OptimizeCSSAssetsPlugin({})        ]
    },

    plugins: [

    new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),

        new MiniCssExtractPlugin({
            filename: "style.css",
        })
    ],

    module:{
        //o primeiro rule vai ser para ler arquivos css
        rules: [{ 
            test:/\.s?[ac]ss$/, //expressão regular
            use: [
                MiniCssExtractPlugin.loader,
               // 'style-loader', //Adiciona o CSS a DOM injetando a tag <style>
                'css-loader',//interpreta @import, url() ...
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'] //para subir arquivos de imagens
        }]
    }
}