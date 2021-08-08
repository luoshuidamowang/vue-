<template>
  <div class="todo-footer">
    <label>
      <!-- 绑定在 <slot> 元素上的 attribute 被称为插槽 prop
				标签在父组件渲染	  
				  
      -->
      <slot>
        <button>test</button>
      </slot>
      <!-- <input type="checkbox" v-model="isCheckAll" />                                                                                    -->
    </label>

    <slot name="middle">
      <!-- <span>
			<span>已完成{{completeSize}}</span> / 全部{{todos.length}}
      </span>-->
    </slot>

    <slot name="right">
      <!--   <button class="btn btn-danger" v-show="completeSize>0"  @click="clearCompleteTodos">
      清除已完成任务</button>-->
    </slot>
  </div>
</template>

<script type ="text/ecmascript-6">
/* 
		模板数据的来源                       
			1.data：自身的可变数据
			2.props：从外部接收的可变数据
			3.computed:根据已有的data或props数据计算产生的数据
	*/

export default {
  //    props:{
  // 	   todos:Array,
  // 	   checkAllTodos:Function,
  // 	   clearCompleteTodos:Function
  //    },
};
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
