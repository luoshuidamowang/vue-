import './test.css'
import logo from './log.jpg'

console.log('html-webpack-plugin包看到这行证明js打包成功且被html引入')
document.getElementById('root').innerHTML = '<h1>webpack-dev-server包启动实时打包、刷新浏览器</h1>'
const fn = () => {
    console.log('检验bable-loader效果');
    console.log(fn);
}
fn()

const image = new Image()
image.src = logo
document.getElementById('root').appendChild(image)
