import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, selectTodos } from './todosSlice';
import Todo from './Todo';
import { saveToLocalStorage } from '../../utils/saveToLocalStorage';
import styles from './Todos.module.css';

export function Todos() {
  const todos = useSelector(selectTodos);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (inputValue !== '') {
      dispatch(addTodo({ name: inputValue }));
    }
    return;
  };

  const dispComplete = index => dispatch(completeTodo({ index }));
  const dispDelete = index => dispatch(deleteTodo({ index }));

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          placeholder={'Todo...'}
          className={styles.addField}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          dispComplete={dispComplete}
          dispDelete={dispDelete}
        />
      ))}
      <button onClick={() => saveToLocalStorage(todos)}>Save todos</button>
    </div>
  );
}
