import './Todos.css'
import TodosItem from './TodosItem';
function Todos(props) {
  console.log("Loaded Todos:");
  return (
    <div className='todos border'>
      {  props.todos.map((todo) => {
        return <TodosItem todo={todo}/>
      })}   
    </div>
  )
}

export default Todos;