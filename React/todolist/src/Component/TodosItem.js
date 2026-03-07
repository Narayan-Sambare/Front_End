import './Todos.css'
function TodosItem({todo}) {
  return (
    <div className='todosItem'>
        <p className='title'>{todo.sno} {todo.title}</p>
        <button className='btn1'>Delete</button>
    </div>
  )
}
export default TodosItem;
