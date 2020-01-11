import React, {useContext} from 'react';
import './style.css';
import {ToggleContext} from '../../App.jsx'

const PlusButton = () => {

  const {isToggleOn, setisToggleOn} = useContext(ToggleContext)

  return (
      <div className="plus">
            <button className="plus-button" type="button" onClick={()=> {setisToggleOn(!isToggleOn) }}>
                +
            </button>
      </div>
  );
}

export default PlusButton;