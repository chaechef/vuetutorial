import React, { useState } from 'react';
import './style.scss';

const CountButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count">
      {/* <button className="StartBtn" type="button" onClick={() => setEditToggle(!editToggle)}>
               {editToggle ? "done" : "setting"}
            </button> */}
      <button
        className="count-button"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default CountButton;
