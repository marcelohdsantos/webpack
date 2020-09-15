//arquivo webpack é um arquivo que será interpretado pelo NodeJs
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/pricipal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public',      
    }
}