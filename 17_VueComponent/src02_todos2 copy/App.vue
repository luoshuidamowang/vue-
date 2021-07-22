<template>

<!-- 组件模板中找数据：找组件对象data(小的vm对象) -->
	<div class="todo-container">
		<div class="todo-wrap">
			<!-- <Header :addTodo="addTodo" /> -->
			<!-- <Header @addTodo2="addTodo" />		给组件对象绑定监听 -->
			<Header ref="header" />
			<List :todos="todos"  :updateTodo='updateTodo' />

			<Footer>
				<input type="checkbox" v-model="isCheckAll" />   

				<template slot="middle">
					<span >
						<span>已完成{{completeSize}}</span> / 全部{{todos.length}}
					</span> 
				</template>
				   

				<button slot="right" class="btn btn-danger" v-show="completeSize>0"  @click="clearCompleteTodos">清除已完成任务
				</button>
			</Footer>

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
		computed:{
		   completeSize(){	//统计被选中任务的数量
			   return this.todos.reduce((pre,todo) => pre + (todo.complete? 1 : 0),0)                                

				/*reduce():根据数组中元素进行统计处理 
			   const arr = [1,3,4,5,7]
			   const total = arr.reduce((preTotal, item) => preTotal + (item%2===1? item : 0), 0)

			   let result = 0
			   arr,forEach(item => {
				   result += item
			   }) */
		   },


		   isCheckAll: {	
			   get() {
				//通过判断completeSize的值是否等于todos.length来提供布尔值控制v-modele
				//思路：列表控制汇总是否勾选:统计选中的任务数量和全部的任务数量是否相等来提供boolean
				//不能直接completeSize()
			   		return this.todos.length === this.completeSize  && this.completeSize>0
			   },

				set(value) {	//操作checkbox		value代表当前勾选的状态
					//对todos进行全选/全部选操作
					//思路：汇总控制所有列表是否勾选
					this.checkAllTodos(value) 

			   }
		   }
	   },

		mounted(){	//vue实例生命周期：页面渲染后

			//通过$globalEventBus来绑定自定义事件监听
			// this.$globalEventBus.$on('deleteTodo',(index) => this.deleteTodo(index)) 
			//既然都在函数内再次调用其他的函数了，不如直接写需要调用的回调
			this.$globalEventBus.$on('deleteTodo', this.deleteTodo)
			
			//给<Header ref="header" />组件对象绑定自定义事件监听
			//要求：绑定自定义事件监听和分发事件的组件对象必须是同一个
			this.$refs.header.$on('addTodo2',this.addTodo)	//绑定接收子组件分发的事件对象,指定回调函数
			
			// this.$globalEventBus.$on('updateTodo',this.updateTodo)
			//模拟异步加载
			setTimeout(() => {
				//从local中读取todos_key对应的数据

				// this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
				this.todos = getTodos()
			}, 1000);
		},

		beforeDestroy(){
				//解除自定义事件监听
				this.$refs.header.$off('addTodo2')
				this.$globalEventBus.$off('deleteTodo')
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