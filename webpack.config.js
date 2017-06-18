// 采用 commonjs 的模块化引入方式

module.exports = {
    // 入口文件
    entry: __dirname + '/www/js/entry.js',
    // 打包后js文件的输出位置
    output: {
        path: __dirname + '/www/',
        filename: 'bundle.js'
    }
}