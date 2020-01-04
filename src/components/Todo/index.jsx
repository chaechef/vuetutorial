import React from 'react';
import './style.css';

function Todo(props) {
  return (
      <div className="todo">
        <div className="stackTime">
          누적량 : 2000개
        </div>
        <div className="plan">
    
          계획 : 팔굽혀펴기
          <br/>
          하루 : 100개
        </div>
        <div className="todo-footer">
          <input className="inputNumber" type="text" name="quantity"/>
          <button className="submitBtn">제출</button>
        </div>
      </div>
  );
}

export default Todo;