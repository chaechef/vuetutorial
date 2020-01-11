import React from 'react';
import './style.css';

const plusBtn = ({toggle, setisToggleOn}) => {

  return (
      <div className="plus">
            <button className="plus-button" type="button" onClick={()=> {setisToggleOn(!toggle) }}>
                +
            </button>
      </div>
  );
}

export default plusBtn;