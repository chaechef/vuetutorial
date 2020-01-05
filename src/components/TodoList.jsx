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
    })
  })
  return (
      <div className="todoList">
          <Todo name="1"/>
          <Todo name="2"/>
          <Todo name="3"/>
          <Todo name="4"/>
          <Todo name="5"/>
          <Todo name="6"/>
      </div>
  );
}

export default TodoList;