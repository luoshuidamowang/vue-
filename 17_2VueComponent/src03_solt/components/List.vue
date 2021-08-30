<template>
    <div>
        <ul class="todo-main">
           <!-- <Item v-for="(todo,index) in todos" :key='todo.id' :todo="todo"  :deleteTodo='deleteTodo' :index='index'  :updateTodo="updateTodo" /> -->
            <Item v-for="(todo,index) in todos" :key='todo.id' :todo="todo" :index='index'  :updateTodo="updateTodo" />
        </ul>
    </div>
</template>

<script>
    import Item from './Item'
    export default {
        //必须声明接收属性props：指定接收的属性名
        //接收的属性会自动添加到组件对象上
        props:['todos','updateTodo'],


        components: { Item:Item },

    }
</script>

<style scoped>
        /*main*/
        .todo-main {
            margin-left: 0px;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 0px;
        }

        .todo-empty {
            height: 40px;
            line-height: 40px;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding-left: 5px;
            margin-top: 10px;
        }
</style>