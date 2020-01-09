import React from 'react';
import './App.css';
import CurrentTime from './components/Timer';
import StartBtn from './components/StartButton';
import TodoList from './components/TodoList';
import PlusBtn from './components/PlusButton';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <div>
      <header className="header">
          <CurrentTime />
          <StartBtn />
      </header>
      <section className="main">
          <TodoList />
          <PlusBtn />
          <CreateForm />
      </section>      
    </div>
  );
}

export default App;
