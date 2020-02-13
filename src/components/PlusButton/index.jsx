import React, { useContext } from 'react';
import './style.scss';
import { ToggleContext } from '../../App.jsx';

const PlusButton = () => {
  const { isToggleOn, setisToggleOn } = useContext(ToggleContext);
  const { plan, planSet } = useContext(ToggleContext);
  const { unit, unitSet } = useContext(ToggleContext);

  const buttonClick = () => {
    setisToggleOn(!isToggleOn);
    planSet('');
    unitSet('');
  };

  return (
    <div className="plus">
      <button className="plus-button" type="button" onClick={buttonClick}>
        +
      </button>
    </div>
  );
};

export default PlusButton;
