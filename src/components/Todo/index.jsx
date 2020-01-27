import React, { useContext } from 'react';
import './style.css';
import axios from 'axios';
import { TodoContext } from '../../App.jsx';
import dayjs from 'dayjs';

const Todo = ({ todo, updateTodo }) => {
  const { todos, setTodos, editToggle } = useContext(TodoContext);

  const updateDay = todo => {
    axios
      .put('http://localhost:8000/todos/' + todo.id + '/', {
        ...todo,
        sum: todo.sum + todo.unit,
        updateDate: new Date()
      })
      .then(res => {
        updateTodo(res.data);
      });
  };
  const deleteTodo = todo => {
    axios.delete('http://localhost:8000/todos/' + todo.id + '/').then(res => {
      const newTodos = [...todos];
      const index = newTodos.findIndex(v => v.id === todo.id);
      newTodos.splice(index, 1);
      setTodos(newTodos);
    });
  };

  return (
    <div className="todo">
      <div className="stackTime">sum : {todo.sum}</div>
      <div className="plan">
        plan : {todo.name}
        <br />
        one day : {todo.unit}
      </div>
      <div className="todo-footer">
        <button
          className="submitBtn"
          onClick={e => {
            deleteTodo(todo);
          }}
        >
          delete
        </button>
        {dayjs(todo.updateDate).format('YYYY MM-DD') ===
        dayjs(new Date()).format('YYYY MM-DD') ? (
          <div></div>
        ) : (
          <button
            className="submitBtn"
            onClick={e => {
              updateDay(todo);
            }}
          >
            submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
