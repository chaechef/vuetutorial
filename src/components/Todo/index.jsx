import React from 'react';
import './style.css';

function Todo(props) {
  return (
      <div className="todo">
        <div className="stackTime">
          누적량 : {props.todo.sum}
        </div>
        <div className="plan">
    
          계획 : {props.todo.name}
          <br/>
          하루 : {props.todo.unit}
        </div>
        <div className="todo-footer">
          <input className="inputNumber" type="text" name="quantity"/>
          <button className="submitBtn">제출</button>
        </div>
      </div>
  );
}

export default Todo;