<template>
    <div>
        <p>
            点击了多少次 {{  count}} ,他是{{ evenOrOdd}}
            <br>
            点击了多少次 {{  $store.state.count}} ,他是{{$store.getters.evenOrOdd}}
                
           
        </p>
        <button @click="fn1">+</button>
        <button @click="fn2">-</button>
        <button @click="f3">奇数增加</button>
        <button @click="f4">异步增加</button>
    </div>
</template>

<script>
import{mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    /* 
        store对象
            1. state：包含所有state数据的对象
            2. getters：包含所有getter计算属性的对象
            3. dispatch(actionName,data)   触发actions调用
            4. commit(actionName,data)     触发mutations
    */
    computed: {
        // count(){
        //     return this.$store.state.count
        // },
        // evenOrOdd(){
        //     return this.$store.getters.evenOrOdd
        // }


        //简化
        ...mapState(['count']),     //{count(){return this.$store.state['count']}}
        ...mapGetters(['evenOrOdd']) //{evenOrOdd(){return this.$store.getters['evenOrOdd']}}   

        
    },

    methods: {
        //调用mutations
        // fn1() {
        //     this.$store.commit("fn1");
        // },
        // fn2() {
        //     this.$store.commit("fn2");
        // },

        //调用actions(内部commit调用mutations函数)
        // f3() {
        //     this.$store.dispatch("fn3");
        // },
        // f4() {
        //     this.$store.dispatch("fn4");
        // },

        //简化
        ...mapMutations(['fn1','fn2']),
        ...mapActions({         //如果methods绑定的函数和store.js暴露的函数名字不一样可以用对象解决
            f3:'fn3',
            f4:'fn4'
        })
    },
};
</script>
   

<style scoped>
</style>