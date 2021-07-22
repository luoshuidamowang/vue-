<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<Header :add='add' />
			<List :todos='todos' :removeList='removeList'	 />
			<Footer :todos='todos' :allBoolean='allBoolean' :clearBoolean='clearBoolean' />
		</div>
  </div>
</template>

<script type ="text/ecmascript-6">

	import Header from './components/Header';
	import Footer from './components/Footer';
	import List from './components/List';



	export default {
		data(){
			return {
				todos:[
					{id:1,title:'A', boolean:false},
					{id:2,title:'B', boolean:true},
					{id:3,title:'C', boolean:false}
				]
			}
		},


		methods:{
			removeList(index){
				this.todos.splice(index,1)
			},
			
			add(item){
				this.todos.push(item)
			},

			allBoolean(value){
				this.todos.forEach(item =>item.boolean = value ) 
			},

			clearBoolean(){
		   		this.todos = this.todos.filter(item => !item.boolean )
			}

		},

		

		components:{
			Header,
			List,
			Footer,
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
