<template>
    <section class="jumbotron">
        <h2>搜索Github用户</h2>
        <h3 class="jumbotron-heading">Search Github Users </h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="searchName" />
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
/* 用于搜集输入框内容输入框 */
    export default {
        data(){
            return {
                searchName:''
            }
        },
        methods:{
            search(){
                const searchName = this.searchName.trim()
                if(searchName){
                    //触发异步actions search调用
                    this.$store.dispatch('search',searchName)
                }

                this.searchName = ''

            }
        }


    };
</script>

<style scoped>
</style>