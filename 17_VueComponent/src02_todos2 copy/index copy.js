import './test.css'
import logo from './logo.png'


console.log('Hello Webpack4444444!')
document.getElementById('root').innerHTML = '<h1>Hello11222111</h1>'

const a = () => {
    console.log('f1')
}

//构造函数创建一个image对象利用src属性接收引入(这其实是一个dom对象)
const image = new Image()   
image.src = logo
document.getElementById('root').appendChild(image)
