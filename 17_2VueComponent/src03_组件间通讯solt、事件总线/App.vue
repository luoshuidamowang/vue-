<template>
  <!-- 组件模板中找数据：找组件对象(小的vm对象) -->
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo" :a='a' /> -->
      <!-- <Header @addTodo2="addTodo" :a='a' />  @事件名=回调函数 -->
      <Header ref="header" :a='a' />
      
      <!-- <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo='updateTodo'/> -->
      <!-- <List :todos="todos"  :updateTodo='updateTodo'/>  使用全局事件总线 -->

       <List :todos="todos" />

      <!-- <Footer  :todos="todos" :checkAllTodos="checkAllTodos" :clearCompleteTodos="clearCompleteTodos" :a='a' /> -->


        <!-- 插槽内容解构是在父组件中解析好之后再传递给子组件的 -->
        <Footer>
        
        <!-- 使用solt 插槽方法1：默认插槽--> 
        <label>
            全选/全不选<input type="checkbox" v-model="checkbox" />
        </label>

        <!-- 使用solt 插槽方法2-->   
        <template slot="middle">
            <span> <span>已完成{{completeSize}} </span> / 全部{{ todos.length }} </span>    
        </template>
        
        
        <!-- 使用solt 插槽方法3-->   
        <button slot="right" class="btn btn-danger" v-show="completeSize>0"  @click="clearCompleteTodos">清除已完成任务</button>    
        
        
        </Footer>
    
    </div>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js'  //引入PubSub包进行组件间通信
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
            PubSub.subscribe('updateTodo',(msg,{todo,isChecks})=>{
                this.updateTodo(todo,isChecks)
            })

            //给<Header>组件对象绑定自定义事件监听，要求：绑定自定义事件监听和分发事件的组件对象必须是同一个
            this.$refs.header.$on('addTodo2',this.addTodo)
            

            //通过全局事件总线给<Item>组件对象绑定自定义事件监听
            this.$globaEventBus.$on('deleteTodo2',this.deleteTodo)
            ,
            setTimeout((  )=>{ 
                // this.todos =  JSON.parse(localStorage.getItem('todos_key') || '[]')
                // this.todos =  JSON.parse(localStorage.getItem('todos_key') ) || this.todos
               this.todos = getTodos()
            },1000)
        },

        beforeDestroy(){
            //解除自定义事件绑定
            this.$refs.header.$off('addTodo2')
            this.$globaEventBus.$off('deleteTodo2')
        },

        computed:{
            completeSize(){     //统计显示：已完成选项数量{{}}
                return this.todos.reduce(( h,i ) => h + (i.complete ? 1 : 0) ,0)
            },

            checkbox:{       //全选/选不选上下双向绑定
                get(){         //根据选项个数判断是否：全选/选不选
                    return this.todos.length === this.completeSize &&  this.completeSize > 0 ? this.a.b = true : this.a.b=false
                },
                set(value){    //根据：全选/选不选 变更：判断个数 
                    this.checkAllTodos(value)
                    this.a.b = value
                }
            },
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