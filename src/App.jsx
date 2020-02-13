import React, { useState, useEffect } from 'react';
import CurrentTime from './components/Timer';
import CountButton from './components/CountButton';
import TodoList from './components/TodoList';
import PlusButton from './components/PlusButton';
import CreateForm from './components/CreateForm';
import axios from 'axios';
import './App.scss';
export const TodoContext = React.createContext();
export const ToggleContext = React.createContext();
export const TimerContext = React.createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isToggleOn, setisToggleOn] = useState(false);
  const [editToggle, setEditToggle] = useState(false);

  const [plan, planSet] = useState('');
  const [unit, unitSet] = useState('');

  const fetchTodo = () => {
    axios.get('http://localhost:8000/todos/').then(res => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, editToggle, setEditToggle }}
    >
      <header className="header">
        <CurrentTime />
        <CountButton />
        <br></br>
      </header>
      <section className="main">
        <TodoList />
        <ToggleContext.Provider
          value={{ isToggleOn, setisToggleOn, plan, planSet, unit, unitSet }}
        >
          <PlusButton />
          <CreateForm />
        </ToggleContext.Provider>
      </section>
    </TodoContext.Provider>
  );
};

export default App;
