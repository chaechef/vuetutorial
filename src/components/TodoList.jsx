import React from 'react';
import { useState, useEffect } from 'react';
import './TodoList.css';
import Todo from './Todo';
import axios from 'axios'

function TodoList() {
  const [todos, todosSet] = useState([]);

  function updateTodo(newTodo) {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === newTodo.id)
    newTodos[index] = newTodo
    todosSet(newTodos)
  }

  useEffect( () => {
    axios.get('http://localhost:8000/todos/')
    .then(res => {
      todosSet(res.data)
    })
  }, [])
  return (
      <div className="todoList">
        {
          todos.map((item, index) => {
          return <Todo key={index} todo={item} updateTodo={updateTodo} />  
          })
        }
      </div>
  );
}

export default TodoList;