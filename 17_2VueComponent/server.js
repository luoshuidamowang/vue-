//使用express搭建一个后台服务器
const express = require('express')
const axios = require('axios')
const app = express()



//注册后台路由
app.get('/repositories/:q', (request, response) => {

    const q = request.params.q          //这是拿params参数
    // axios({
    //     method: 'GET',
    //     url: 'https://api.github.com/search/repositories',
    //     params: {               //虽然写的是params，但是这是query参数,只是文档这样要求写的
    //         q,
    //         sort: 'stars'
    //     }

    // }).then(response => {
    //     const { name, html_url } = response.data.items[0]
    //     response.send({
    //         status: 0,
    //         data: { name, html_url }
    //     })

    //     console.log('响应成功了')

    // })

    //上面接口太慢了 模拟一个
    setTimeout(() => {
        console.log('模拟响应成功-服务器端口号为4000')
        // response.setHeader('Access-Control-Allow-Origin','http://localhost:8081')	
        response.send({
            status: 0,
            data: { name:q, html_url:'http//www.githup,com/vue' }
        })

    }, 1000);

})

app.listen('4000', () => {
    console.log('4000server 启动成功：http://loaclhost:4000');
})