//arquivo webpack é um arquivo que será interpretado pelo NodeJs
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //extrair o css para uma página específica
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development':'production', 
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public', //jogar o build para dentro da pasta /public 
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true //executar de uma forma mais rápida possível
            }),

            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
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
        }]
    }
}