import React, {useState} from 'react';
import './style.css';

function plusBtn(props) {

  return (
      <div className="plus">
            <button className="plus-button" type="button" onClick={()=> {props.setisToggleOn(!props.toggle) }}>
                +
            </button>
      </div>
  );
}

export default plusBtn;