import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { TodoContext } from '../../App.jsx';
import './style.scss';
const TodoBeta = ({ todo, updateTodo }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const [done, setDone] = useState(
    dayjs(todo.updateDate).format('YYYY MM-DD') ===
      dayjs(new Date()).format('YYYY MM-DD')
  );

  const updateDay = todo => {
    const inputValueNum = parseInt(inputValue);

    axios
      .put('http://localhost:8000/todos/' + todo.id + '/', {
        ...todo,
        sum: todo.sum + inputValueNum,
        updateDate: new Date()
      })
      .then(res => {
        updateTodo(res.data);
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false);
        }, 500);
        setDone(true);
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
    <>
      <div
        className={`todo-front${animate ? ' animate-rotate' : ''}${
          done ? ' done' : ''
        }`}
      >
        {done ? (
          <div>
            {' '}
            <div className="plan-res">{todo.name}</div>
            <div className="sum">{todo.sum}</div>
          </div>
        ) : (
          <>
            <div className="plan">{todo.name}</div>
            <div className="min">{todo.unit}</div>
            <input
              type="text"
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
              }}
            />
            <button
              className="submit"
              onClick={e => {
                updateDay(todo);
              }}
            >
              submit
            </button>
          </>
        )}
      </div>
      {/* <div className="todo-back">123123</div> */}
    </>
  );
};

export default TodoBeta;
