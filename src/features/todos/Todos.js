import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addTodo, completeTodo, deleteTodo, selectTodos } from './todosSlice';

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
        <div key={index} className={styles.todoItem}>
          <div className={styles.contentGroup}>
            <h3>{todo.name}</h3>
            <p>{todo.completed ? 'completed' : 'not completed'}</p>
          </div>

          <div className={styles.buttonGroup}>
            <button onClick={() => dispatch(completeTodo({ index }))}>
              complete
            </button>

            <button onClick={() => dispatch(deleteTodo({ index }))}>
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
