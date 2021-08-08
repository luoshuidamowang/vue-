<template>
  <div class="todo-footer">
    <label>
      全选/全不选<input type="checkbox" v-model="checkbox" />
    </label>
    <span> <span>已完成{{completeSize}} </span> / 全部{{ todos.length }} </span>
    <button class="btn btn-danger" v-show="completeSize>0"  @click="clearCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        
        props:{
            todos:Array,
            checkAllTodos:Function,         //全选/选不选按钮函数
            clearCompleteTodos:Function,     //删除全部选中  
            a:Object
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
            
    }
</script>

<style scoped>
/*footer*/
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