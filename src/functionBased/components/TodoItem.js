import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const todoItem = props;

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = todoItem.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  // useEffect(() => () => {
  //   console.log('Cleaning up...');
  // }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => todoItem.handleChangeProps(id)}
        />
        <button type="button" onClick={() => todoItem.deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          todoItem.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = PropTypes.node;

export default TodoItem;
