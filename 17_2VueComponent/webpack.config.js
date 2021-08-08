//配置一个基础的打包环境
//用的是commonjs模块化语法 向外暴露一个配置对象 


//path是node内置的一个包,不需要下载,里面有一个全局变量：__dirname  (当前文件所在目录的绝对路径)
//它是一个对象，里面有一个函数,可以用来拼接绝对路径path.resolve(__dirname, 'xxx')  config文件所在的跟目录下+xxx文件夹
const path = require('path')
function resolve(dir) {
    return path.resolve(__dirname, dir)
}

const HtmlWebpackPlugin = require('html-webpack-plugin') //构造函数:打包生成新的index.html文件且自动引入打包后的js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除打包文件夹dist
const VueLoaderPlugin = require('vue-loader/lib/plugin') //vue插件引入


module.exports = {
    //模式:这里可以不写,在package.json文件的"scripts":{key：webpack --mode production}简化命令中配置模式
    // mode:'development',         //开发者模式

    //入口
    // entry:'./src/index.js',
    entry: {
        app: './src/index.js'
    },

    //出口：指定打包后的文件输出路径
    output: {
        //path.resolve()用来拼接绝对路径
        path: resolve('dist'),    //所有打包生成文件的基础路径： 现在的path值是dist文件夹下的绝对路径
        //打包后的js文件名字：[name].是占位符,写了=入口文件属性名app,最终输出文件名为app.bundle.js
        filename: '[name].bundle.js'

    },

    //模块打包器/加载器
    module: {
        rules: [ //内部配置loader
            {   //处理ES6转换ES5
                test: /\.js$/,          //处理js文件
                // exclude: /(node_modules|bower_components)/, //排除匹配哪些文件夹
                include: [resolve('src')],                     //只对哪个文件夹处理
                use: {
                    loader: 'babel-loader',                    //打包处理 ES6/CSS/图片
                    options: {
                        presets: ['@babel/preset-env'],        //配置预设包(包含多个ES语法解析的包)
                        plugins: [                              //预设包之外的插件包

                        ]
                    }
                }
            },
            {   //处理CSS
                test: /\.css$/,
                //先把css代码捞到js，再把js里面的css捞到页面中去,多个loader从右到左处理,从下往上处理
                //下载vue-loader和vue-template-compiler后把style-loader前面加上vue,对原本插件进行增强补充,不用再下载vue-style-loader,它是内置的
                use: ['vue-style-loader', 'css-loader'],

            },
            {   //处理图片
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                // loader: 'file-loader',   //不会进行小图片的base64处理
                //url-loader内部会使用file-loader，但是不会自动下载需要手动下载
                loader: 'url-loader',      //会进行小图片的base64处理 (把小的图片转为数字代码的形式)
                options: {
                    limit: 10 * 1024,       //设置临界值：小于10k的图片就进行base64处理
                    name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path设置路径和名字
                    //[name]占位符 源文件是什么名字 打包后还是什么名字
                    //.[hash:7]设置哈希值：log.716f3b9.jpg  (716f3b9)就是哈希值
                    //.[ext]占位符 源文件是什么扩展名 打包后还是什么扩展名

                }
            },
            {   //vue
                test: /\.vue$/,
                loader: 'vue-loader'
            }


        ]
    },

    //插件
    plugins: [   //插件相当于是构造函数，这里放的都是插件的实例对象
        new HtmlWebpackPlugin({     //在执行命令文件所在目录下查找index.html,打包html后自动引入打包后的js
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),   //每次打包,先清空输出文件夹
        new VueLoaderPlugin(),      //vue注册

    ],

    //配置开发服务器,实时刷新页面：安装webpack-dev-server
    devServer: {
        port: 8081,
        open: true, // 自动打开浏览器
        quiet: true, // 不做太多日志输出
        
    },

    //模块引入解析配置
    resolve: {
        //好处：简化模块路径的编写、加快打包
        alias: {                                    //模块路径别名(简写方式)    先找别名、找不到去node_modules找
            '@': resolve('src'),                    //相当于@就直接定位到src的绝对路径
            '@com': resolve('src/components'),      
            // 'vue$': 'vue/dist/vue.esm.js',       // 表示精准匹配：引入以vue结尾的直接找vue/dist/vue.esm.js,引入带编译器版本的vue
        },
        extensions: ['.js', '.vue', '.json'],       // 可以省略的后缀名
    },

    //开启sourec-map 浏览器就支持这个功能，不用下载安装包：出错可以映射到源文件，而不是打包后的文件
    devtool:'cheap-module-eval-source-map'
}