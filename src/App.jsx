import React, {useState, useEffect} from 'react';
import './App.css';
import CurrentTime from './components/Timer';
import StartBtn from './components/StartButton';
import TodoList from './components/TodoList';
import PlusBtn from './components/PlusButton';
import CreateForm from './components/CreateForm';
import axios from 'axios';

const App = () => {
  const [todos, todosSet] = useState([]);

  const [isToggleOn, setisToggleOn] = useState(false);

  const fetchTodo = () => {
    axios.get('http://localhost:8000/todos/')
    .then(res => {
      todosSet(res.data)
    })
  }

  useEffect( () => {
    fetchTodo()
  }, [])

  return (
    <div>
      <header className="header">
          <CurrentTime />
          <StartBtn />
      </header>
      <section className="main">
          <TodoList todos={todos} todosSet={todosSet}/>
          <PlusBtn setisToggleOn={setisToggleOn} toggle={isToggleOn}/>
          <CreateForm toggle={isToggleOn} setisToggleOn={setisToggleOn} todos={todos} todosSet={todosSet}/>
      </section>      
    </div>
  );
}

export default App;
