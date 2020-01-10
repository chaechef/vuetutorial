import React, {useState} from 'react';
import './App.css';
import CurrentTime from './components/Timer';
import StartBtn from './components/StartButton';
import TodoList from './components/TodoList';
import PlusBtn from './components/PlusButton';
import CreateForm from './components/CreateForm';

function App() {
  const [isToggleOn, setisToggleOn] = useState(false);


  return (
    <div>
      <header className="header">
          <CurrentTime />
          <StartBtn />
      </header>
      <section className="main">
          <TodoList />
          <PlusBtn setisToggleOn={setisToggleOn} toggle={isToggleOn}/>
          <CreateForm toggle={isToggleOn} setisToggleOn={setisToggleOn}/>
      </section>      
    </div>
  );
}

export default App;
