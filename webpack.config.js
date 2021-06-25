/*
 * :file description: 
 * :name: /webRTC/webpack.config.js
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-06-25 20:35:13
 * :last editor: 张德志
 * :date last edited: 2021-06-25 20:39:15
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    context:process.cwd(),
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'utils.main.js',
        libraryTarget:'umd',
        library:'utils',
    },
    devServer:{
        host:'0.0.0.0',
        port:8082,
        open:true,
        contentBase:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'head'
        })
    ]
   
}