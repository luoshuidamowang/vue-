<template>
    <div>
        <ul>
            <li v-for="m in messages" :key="m.id">
                <!-- <router-link :to="`/home/news/detail/${m.id}?title=${m.title}`">{{ m.title }}</router-link> -->
                <router-link  :to="{name:'detail',params:{id:m.id},query:{title:m.title}}" >{{ m.title }}</router-link>
                <button @click="pushShow(m.id)">push查看</button>
                <button @click="replaceShow(m.id+0)">replace查看</button>      
                <!-- 同时写这两种方式跳转一个地址就会报错 -->
            </li>
        </ul>



        <button @click="$router.back()">返回</button>

        <input type="text">

        <hr>

        <router-view></router-view>


    </div>
</template>

<script>
export default {
     name:'Message-xmt',
    data() {
        return {
            messages: [],
        };
    },

    mounted() {
        //模拟发送异步ajax请求获取消息列表数据
        setTimeout(() => {
            const messages = [
                { id: 1, title: "message-xmt001" },
                { id: 2, title: "message-xmt002" },
                { id: 3, title: "message-xmt003" },
            ];
            this.messages = messages;
        }, 300);
    },
    methods: {
        pushShow(id){
            //编程式导航(跳转)
            console.log('pushShow',this.$router);
            // this.$router.push(`/home/news/detail/${id}`)

            this.$router.push({name:'detail',params:{id}})

        },
        replaceShow(id){
            //编程式导航(跳转)
            console.log('replacehShow',this.$router);
            this.$router.replace(`/home/news/detail/${id}`)
        },
    },
};
</script>

<style scoped>
</style>