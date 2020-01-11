import React from 'react';
import './style.css';
import axios from 'axios'

const Todo = ({todo, updateTodo}) => {

  const updateDay = (todo) => {
    axios.put('http://localhost:8000/todos/'+todo.id+'/', {
      name : todo.name,
      unit : todo.unit,
      sum : todo.sum + todo.unit,
      startDate : todo.startDate,
    })
    .then( res => {
      updateTodo(res.data)
      // window.location.reload()
    })
  }
  const deleteTodo = (todo) => {
    axios.delete('http://localhost:8000/todos/'+todo.id+'/')
    .then( res => {
      // props.updateTodo(res.data)
      // window.location.reload()
      console.log(res)
    })
  }
  return (
      <div className="todo">
        <div className="stackTime">
          누적량 : {todo.sum}
        </div>
        <div className="plan">
          계획 : {todo.name}
          <br/>
          하루 : {todo.unit}
        </div>
        <div className="todo-footer">
          {/* <input className="inputNumber" type="text" name="quantity"/> */}
          <button className="submitBtn"  onClick={(e) => { deleteTodo(todo) }}>삭제</button>
          <button className="submitBtn"  onClick={(e) => { updateDay(todo) }}>제출</button>
        </div>
      </div>
  );
}

export default Todo;