import React from 'react';
import './styles.css';
import Todo from '../Todo';

const TodoList = ({todos, todosSet}) => {
  

  const updateTodo = (newTodo) =>{
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === newTodo.id)
    newTodos[index] = newTodo
    todosSet(newTodos)
  }



  return (
      <div className="todoList">
        {
          todos.map((item, index) => {
          return <Todo key={index} todo={item} updateTodo={updateTodo} todos={todos} todosSet={todosSet} />  
          })
        }
      </div>
  );
}

export default TodoList;