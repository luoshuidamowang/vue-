<template>
    <div>
        <div v-if="!repoName">   loading...  </div>
        <div v-else >
            最热门的包是：<a :href="repoUrl">   {{repoName}} </a> 
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                repoName:'',
                repoUrl:''
            }
        },
        mounted() {
            //使用vue-resource发送ajax请求
            // this.$http.get('https://api.github.com/search/repositories?q=v&sort=stars')
            // .then(response => {
            //     const result = response.data
            //     const {name,html_url} = result.items[0]

            //     //更新数据
            //     this.repoName = name
            //     this.repoUrl = html_url
            // })
            // .catch(error=>{  
            //     alert('请求出错')
            // })



            //使用axios发送ajax请求,且这次通过server.js服务器取请求gethup接口
            // axios.get('https://api.github.com/search/repositories',{
                // params:{    //虽然这么写：但是这是用来指定一个query参数,而不是params参数
                //     q:'v',
                //     sort:'stars'
                // }
            // }

           
            // axios.get('http://localhost:4000/repositories/vue')  //这是没写代理服务器前在server.js用cors解决跨域问题

           /*  webpack.conjfg.js文件devServer配置后代理服务器转发的是：
            把http://localhost:8081/api/xxx转化为http://localhost:4000/api/xxx */
            axios.get('/api/repositories/vue')
            .then(response => {
                const result = response.data        //server.js服务器响应数据是{status:0,{name,html_url}}
                const {name,html_url} = result.data //server.js服务器响应数据是{status:0,{name,html_url}}

                //更新数据
                this.repoName = name
                this.repoUrl = html_url
            })
            .catch(error=>{  
                alert('请求出错',error)
            })
        },
    }
</script>


<style scoped>
</style>