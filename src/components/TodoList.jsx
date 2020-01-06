import React from 'react';
import { useState, useEffect } from 'react';
import './TodoList.css';
import Todo from './Todo';
import axios from 'axios'

function TodoList() {
  const [todos, todosSet] = useState(null);

  useEffect( () => {
    axios.get('http://localhost:8000/todos/')
    .then(res => {
      console.log(res.data)
      todosSet(res.data)
    })
  }, [])
  return (
      <div className="todoList">
        {
          Array.isArray(todos) ? {} : "456"
        }
      </div>
  );
}

export default TodoList;