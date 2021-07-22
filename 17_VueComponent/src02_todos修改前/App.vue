<template>

<!-- 组件模板中找数据：找组件对象data(小的vm对象) -->
	<div class="todo-container">
		<div class="todo-wrap">
			<Header :addTodo="addTodo" />

			<List :todos="todos" :deleteTodo="deleteTodo" :updateTodo='updateTodo' />

			<Footer :todos="todos" :checkAllTodos="checkAllTodos"
			 :clearCompleteTodos="clearCompleteTodos" />
		</div>
	</div>
</template>

<script>
	//引入
	import Header from './components/Header'
	import List from '@comps/List'
	import Footer from '@comps/Footer'
	import {saveTodos,getTodos} from 	'./utils/storageUtils'

	export default {
	// name:'App',
		data() {
			return {
				todos:[
					// {id:1, title:'a' ,complete:false},
					// {id:2, title:'b' ,complete:true},
					// {id:3, title:'c' ,complete:false},
				]
				//数据在哪里，更新数据的行为就应该定义在哪里，只是会传给不同的子组件去调用
				//有一个原则是子组件不要直接修改父组件的属性
				
			}
		},

		mounted(){
			//模拟异步加载
			setTimeout(() => {
				//从local中读取todos_key对应的数据

				// this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
				this.todos = getTodos()
			}, 1000);


		},


		methods:{	//所有的方法都会成为组件对象的方法
			addTodo(todo){	//添加数组元素
				this.todos.unshift(todo)
			},


			deleteTodo(index){	//删除数组元素
				this.todos.splice(index,1)
			},


			//对所有todos进行全选/全不选
			checkAllTodos(isCheck){
				this.todos.forEach( todo => todo.complete = isCheck )
				// forEach(function(item){return item.complete = tru/false?})
			},


			//删除已经选中的任务
			clearCompleteTodos(){
				this.todos = this.todos.filter(todo => !todo.complete)
				//思路：过滤是根据条件选出逻辑为true的元素，通过!todo.complete把选中任务的元素剔除
				
			},


			//有一个原则是子组件不要直接修改父组件的属性
			//更新某一个todo
			updateTodo(todo,value){
				todo.complete = value
				
			}


		},

		/* computed(){

		}, */

		//深度监视todos的变化
		watch:{
			todos:{
				deep:true,//开启深度监视todos每一个数组里面对象的每一个属性,只要发生变化就会保存
				// handler(value){	//value是最新的todos
				// //保存最新的todos到loacl,以json形式
				// 	// localStorage.setItem('todos_key',JSON.stringify(value))
				// 	saveTodos(value)

				// }

				//上面相当于
				// handler:function(value){
					// saveTodos(value)
				// },

				//简写
				handler:saveTodos,
				

				/* 
				function fn(a) {}

				div.onclick = function(event){
					fn(event)
				}

				div.onclick = fn


				const obj = {
					fn(a){}
				}

				div.onclick = obj.fn
				*/

			}

		},

		//局部注册
		components:{	//组件
			Header,
			List,
			Footer
		}
	};
</script>


<style scoped>
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