<template>
   <div class="todo-footer">
        <label>
            <input type="checkbox"   v-model="allBoolean2" />
        </label>
        <span>
            <span>已完成{{sum}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click = clearBoolean  >清除已完成任务</button>
    </div>
</template>

<script type ="text/ecmascript-6">
   export default {
	   	props: ['todos','allBoolean','clearBoolean'],

		computed:{
			sum(){
				return this.todos.reduce((l,i) => l + (i.boolean==true? 1 :0),0)
			},

			allBoolean2:{
				get(){
					return this.todos.length === this.sum  && this.sum>0
				},

				set(value){
					this.allBoolean(value)
				}
			}
		},

		/* methods:{
			clearBoolean2(){
				this.clearBoolean()
				console.log(1)
			}
		} */

   }
</script>

<style scoped>
    .todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
 
</style>
