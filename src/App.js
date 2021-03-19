import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from './features/todos/todosSlice';
import { selectCount } from './features/counter/counterSlice';
import { Counter } from './features/counter/Counter';

import { Todos } from './features/todos/Todos';

import './App.css';

function App() {
  const todos = useSelector(selectTodos);
  const count = useSelector(selectCount);

  return (
    <div className='App'>
      <Todos />
      <Counter />
      <div>
        <h2>Outside Todos and Counter</h2>
        <h3>Counter State:{count} </h3>
        <h3>Todos Length: {todos.length} </h3>
      </div>
    </div>
  );
}

export default App;
