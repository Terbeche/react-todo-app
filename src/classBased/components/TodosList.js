import React from 'react';
import { PropTypes } from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const todoList = props;
  return (
    <ul>
      {todoList.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={todoList.handleChangeProps}
          deleteTodoProps={todoList.deleteTodoProps}
          setUpdate={todoList.setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = PropTypes.node;

export default TodosList;
