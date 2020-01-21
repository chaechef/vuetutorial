import React, {useContext} from 'react';
import './styles.css';
import Todo from '../Todo';
import {TodoContext} from '../../App.jsx';

const TodoList = () => {

  const {todos, setTodos} = useContext(TodoContext)

  const updateTodo = (newTodo) =>{
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === newTodo.id)
    newTodos[index] = newTodo
    setTodos(newTodos)
  }

  return (
    <div className="todoList">
      {
        
        todos.length === 0 ? (
          <div>No Data</div>
          ) : (  
          todos.map( todo => {
          return <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />
        }))
      }

            
    </div>
  );
}

export default TodoList;