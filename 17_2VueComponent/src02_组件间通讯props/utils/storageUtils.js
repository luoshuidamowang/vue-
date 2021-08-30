/* 
    localstorage数据存取的工具模块，包含n个工具函数
    把todos的变化保存下来，让刷新的时候可以依然拿到保存
    
*/

//默认暴露
/* export default{
    saveTodos(){},
    getTodos(){}
} */


export function saveTodos(todos){   
    localStorage.setItem('todos_key',JSON.stringify(todos))

}

export const getTodos =  (  )=> JSON.parse(localStorage.getItem('todos_key')) || [{id:1,title:"A", complete:false},
{id:2,title:"B", complete:true},
{id:3,title:"C", complete:false},]