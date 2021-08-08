<template>
    <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
        <label>
            <input type="checkbox" v-model="isCheck" />
            <span>  {{todo.title}} {{todo.complete}} </span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>
    
</template>

<script>
    export default {
        //声明接收属性:     指定属性名/属性值的类型 
        props:{
            todo:Object,                //接收数据数组的每一个元素对象
            deleteTodo:Function,        //从App==>list==>item接收删除数组元素的函数
            index:Number,               //从list==>item接收每一个数组元素对象的下标，应以删除
            updateTodo:Function,
        },
    
        data(){
            return {
                bgColor: '',            //设置item进入背景颜色
                isShow: false           //设置删除按钮是否显示
            }
        },
        computed:{
            isCheck:{
                get(){
                    return this.todo.complete       //下面数据影响上面按钮 还是原来的状态 不做改变
                },
                set(value){                         //上面按钮影响下面数据 依据新的值value为按钮提供状态
                    this.updateTodo(this.todo,value)
                }
            }
        },

        methods:{
            handleEnter(completen){
                if(completen){
                    this.bgColor = "#aaaaaa"
                    this.isShow = true
                }else{
                    this.bgColor = 'white'
                    this.isShow = false
                }
                // console.log('进入每个item了');
            },
            deleteItem(){
                if(confirm('确定要删除么删除')){
                    this.deleteTodo(this.index)
                }
                
            }

        }
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        /* display: none; */
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>