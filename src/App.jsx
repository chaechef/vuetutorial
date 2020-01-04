import React from 'react';
import './App.css';
import CurrentTime from './components/Timer';
import StartBtn from './components/StartBtn';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <header className="header">
          <CurrentTime />
          <StartBtn />
      </header>
      <section className="section">
        <TodoList />

      </section>      
    </div>
  );
}

export default App;
