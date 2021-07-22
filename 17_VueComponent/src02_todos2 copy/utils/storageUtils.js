// localStorage数据存取的工具模块：包含n个工具函数


//默认暴露
// export default {
//     saveTodos(){},
//     getTodos(){}
// }


//分别暴露
export function saveTodos(value) {
    localStorage.setItem('todos_key',JSON.stringify(value))
}
export  const getTodos = () => JSON.parse(localStorage.getItem('todos_key') || '[]')
    
