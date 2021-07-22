/*  

    因为打包的时候用的是node工具，基于node去用的
    所以要使用commonjs模块化语法
    向外暴露一个配置对

*/

const path = require('path')    //node内置的包，几乎比引入

//插件模块向外暴露的是一个构造函数构造函数 
const HtmlWebpackPlugin = require('html-webpack-plugin')//此插件用来打包后自动引入js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//此插件用来自动删除打包后出口文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')//引入vue插件

//__diranme:全局变量，当前文件webpack.config.js所在目录的绝对路径
//path.resolve(__dirname, 'dir')太常用了可以用一个函数来写,返回指定目录的绝对路径
function resolve(dir){     
    return path.resolve(__dirname, dir)
}      


module.exports = {
    //模式
    // mode:'development',

    //防止webpack自身打包产生的箭头函数, 不能同时webpack-dev-server使用,不过目前版本不会产生箭头函数
    // target: false,    

    //入口
    // entry: './src/index.js', //默认生成文件名字为main
    entry: {
        app: './src/index.js'  //打包后文件的名字:需要打包的js入口文件
    },

    //出口
    output: {  //打包后的js的出口文件
        path: resolve('dist'),   //所有打包文件的出口文件夹dist的绝对路径
        filename: 'static/[name].bundle.js'//[name]是占位符==空白,写的话就是[出口文件名字].后缀

    },

    //模块加载器
    module: {
        rules: [     //内部配置loader
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },


            {   //ES6转ES5
                test: /\.js$/,
                //exclude: /(node_modules|bower_components)/,//排除不需要匹配的文件夹
                include: [resolve('src')],                  //只对指定的文件夹处理
                use: {
                    
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']      
                    }, /* 
                    bable本身不编译es6的语法
                    bable需要基于它的plugin来做ES语法的编译
                    每个语法都有一个对应的bable plugin来编译对应的语法
                    一个bable preset包是包含多个常用的bable plugin的集合包(preset-env')*/
                }
            },


            {   //处理css
                test:/\.css$/,
                //loader处理是从下向上，从右向左
                //vue-style-loader是对style-loader的增强
                // use:['style-loader','css-loader']//将css捞到js -->将js捞到页面
                use:['vue-style-loader','css-loader']//将css捞到js -->将js捞到页面


            },

            {   //处理image图片
                test: /\.png|jpe?g|gif|svg$/,
                // loader: 'file-loader'    //不会进行小图片的base64处理把小图片转为字符串
                loader: 'url-loader',//内部需要用使用file-loader,比较特殊没有间接依赖,需要手动下载file
                options: {
                  limit: 1*1024,       //小于1k的图片就进行base64处理
                  name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path 
                  //static/img/ == static文件下下的img文件夹下的文件
                  //[name]=占位符，本来什么名字就用什么名字
                  //[hash:7]哈希值取7位
                  //[ext]用原本的扩展名

                }
            },


        ]
    },

    //插件
    plugins: [   //里面放插件的实例对象
        new HtmlWebpackPlugin({
            // 不写这个的话：生成的是一个新的html，原html数据没有被打包，却引入js
            // 写的话：指定一个文件为模板，生成一个打包后的html，自动引入js文件
            template: 'index.html'
        }),

        new CleanWebpackPlugin(),   //清除打包文件夹

        new VueLoaderPlugin(),  //引入vue
    ],


    //开发服务器
    devServer: {
        // port: 8081, //指定服务器内存
        open: true, // 自动打开浏览器
        quiet: true, // 不做太多日志输出
    },

    //配置开启source-map调试
    // devtool: 'cheap-module-eval-source-map',


    //模块引入解析
    resolve:{
        alias:{ //模块路径别名：优点：(1)不用因为相对路径而用./一层层跳转(2)加快打包
            '@':resolve('src'),//相当于直接定位到src,
            '@comps':resolve('src/components'),//相当于直接定位到src/components文件夹下
            // 'vue$': 'vue/dist/vue.esm.js',  //表示精准匹配:去找node_modules下vue/dist/vue.esm.js文件
        },
        extensions:['.js','.vue'],  //指定哪些后缀的模块可以省略后缀
    }




}