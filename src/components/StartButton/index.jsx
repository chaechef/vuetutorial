import React, {useState} from 'react';
import './styles.css';

const StartButton = () => {

  const [editToggle, setEditToggle] = useState(false);

  return (
      <div className="start">
            <button className="StartBtn" type="button" onClick={() => setEditToggle(!editToggle)}>
               {editToggle ? "done" : "setting"}
            </button>
      </div>
  );
}

export default StartButton;