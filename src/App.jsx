import React, {useState, useEffect } from 'react';
import './App.css';
import CurrentTime from './components/Timer';
import StartButton from './components/StartButton';
import TodoList from './components/TodoList';
import PlusButton from './components/PlusButton';
import CreateForm from './components/CreateForm';
import axios from 'axios';

export const TodoContext = React.createContext();
export const ToggleContext = React.createContext();
export const TimerContext = React.createContext();

const App = () => {

  const [todos, todosSet] = useState([]);
  const [isToggleOn, setisToggleOn] = useState(false);


  const fetchTodo = () => {
    axios.get('http://localhost:8000/todos/')
    .then(res => {
      todosSet(res.data)
      console.log(res.data)
    })
  }

  useEffect( () => {
    fetchTodo()
  }, [])

  return (
    <TodoContext.Provider value={{todos, todosSet}}>
        <header className="header">
            <CurrentTime />
            <StartButton />
        </header>
        <section className="main">
            <TodoList/>
            <ToggleContext.Provider value={{isToggleOn, setisToggleOn}}>
              <PlusButton/>
              <CreateForm/>
            </ToggleContext.Provider>
        </section>      
    </TodoContext.Provider>
  );
}

export default App;
