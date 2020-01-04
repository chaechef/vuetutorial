import React from 'react';
import './Todo.css';

function Todo(props) {
  return (
      <div className="todo">
          {props.name}

      </div>
  );
}

export default Todo;