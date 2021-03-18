import styles from './Todos.module.css';
const Todo = props => {
  const { index, todo, dispComplete, dispDelete } = props;
  return (
    <div key={index} className={styles.todoItem}>
      <div className={styles.contentGroup}>
        <h3>{todo.name}</h3>
        <p>{todo.completed ? 'completed' : 'not completed'}</p>
      </div>

      <div className={styles.buttonGroup}>
        <div>
          <label>done?</label>
          <input
            type='checkbox'
            id='myCheck'
            checked={todo.completed}
            onChange={() => dispComplete(index)}
          />
        </div>

        <button onClick={() => dispDelete(index)}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
