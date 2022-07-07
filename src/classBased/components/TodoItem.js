import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './TodoItem.module.css';

let { todoItemState } = this.state;
const { todoItemProps } = this.props;
const { todoItemSetState } = this.setState;

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    todoItemState = { editing: false };
  }

      handleEditing = () => {
        todoItemSetState({
          editing: true,
        });
      }

      handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          todoItemSetState({ editing: false });
        }
      }

      // componentWillUnmount() {
      //   console.log('Cleaning up...');
      // }

      render() {
        const completedStyle = {
          fontStyle: 'italic',
          color: '#595959',
          opacity: 0.4,
          textDecoration: 'line-through',
        };

        const { completed, id, title } = todoItemProps.todo;
        const viewMode = {};
        const editMode = {};

        if (todoItemState.editing) {
          viewMode.display = 'none';
        } else {
          editMode.display = 'none';
        }
        return (
          <li className={styles.item}>
            <div onDoubleClick={this.handleEditing} style={viewMode}>

              <input
                type="checkbox"
                className={styles.checkbox}
                checked={completed}
                onChange={() => todoItemProps.handleChangeProps(id)}
              />
              <button type="button" onClick={() => todoItemProps.deleteTodoProps(id)}>Delete</button>
              <span style={completed ? completedStyle : null}>{title}</span>
            </div>
            <input
              type="text"
              style={editMode}
              className={styles.textInput}
              value={title}
              onChange={(e) => {
                todoItemProps.setUpdate(e.target.value, id);
              }}
              onKeyDown={this.handleUpdatedDone}
            />
          </li>
        );
      }
}

TodoItem.propTypes = PropTypes.node;

export default TodoItem;
