<template>
    <div>
        <div class="todo-header">
			<input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter='add' v-model="title"/>
        </div>
    </div>
</template>

<script>
    export default {
        props:{     //限定了了属性名/属性值的类型/属性的必要性
            // addTodo:{
            //     type:Function,
            //     required:true 
            // },
            a:{             //用来记录是否为：全选/全部选，用来控制新添加的按钮默认是否选中
                type:Object,
            }

        },
        data(){
            return {
                title:''
            }
        },
        methods:{
           
            add () {
                let title = this.title.trim()           //trim()清除字符串左右的空格
                if (!title){
                    return
                }
                const todo = {
                    id:Date.now(),
                    title,
                   complete:this.a.b
                }


                // this.addTodo(todo)   //掉用父组件通过props传来的数据


                this.$emit('addTodo2',todo)	
                
                this.title = ' '        //调用完清空输入框
            }
        }


    }
</script>

<style scoped>
    /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>