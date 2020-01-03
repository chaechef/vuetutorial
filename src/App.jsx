import React from 'react';
import './App.css';
import CurrentTime from './components/Current_time';
function App() {
  return (
    <div>
      <div className="Timer">
          <CurrentTime />
          <button className="StartBtn" type="button">
              start!
            </button>
      </div>
      <div className="todo">
        

      </div>      
    </div>
  );
}

export default App;
