<template>
  <!-- 组件模板中找数据：找组件对象(小的vm对象) -->
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" :a='a' />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo='updateTodo'/>
      <Footer  :todos="todos" :checkAllTodos="checkAllTodos" :clearCompleteTodos="clearCompleteTodos" :a='a' />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from '@com/List'
import Footer from '@com/Footer'
import {saveTodos,getTodos} from './utils/storageUtils'         //引入

    export default {
        data(){
            return {
                todos:[
                    {id:1,title:"A", complete:false},
                    {id:2,title:"B", complete:true},
                    {id:3,title:"C", complete:false},
                ],
                a:{},
              
            }
        },
        mounted(){
            setTimeout((  )=>{ 
                // this.todos =  JSON.parse(localStorage.getItem('todos_key') || '[]')
                // this.todos =  JSON.parse(localStorage.getItem('todos_key') ) || this.todos
               this.todos = getTodos()
            },1000)
        },

        methods:{   //定义在methods所有的方法都会成为组件对象的方法
            addTodo(todo){ //添加列表             
                this.todos.push(todo)
            },

            deleteTodo(index){ //删除列表
                this.todos.splice(index,1)
            },

            checkAllTodos(isCheck){ // 全选/全不选
            console.log('全选');
                this.todos.forEach(todo => todo.complete = isCheck)
            },

            clearCompleteTodos(){   //删除全部选中
                console.log('开始删除点击后value为true的');
                this.todos = this.todos.filter(todo =>  !todo.complete)
            },

            updateTodo(todo,value){
                todo.complete = value
            }
           
        },


        watch:{ //把todos的变化保存下来，让刷新的时候可以依然拿到保存
            todos:{
                deep:true,  //深度监视
                handler(value){     //value是新的todos
                    //保存新的todos到local,必须是json形式
                    // localStorage.setItem('todos_key',JSON.stringify(value))
                    saveTodos(value)
                }
            }

        },

        components:{       //局部注册
            Header,
            List,
            Footer
        }
    }
</script>


<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>