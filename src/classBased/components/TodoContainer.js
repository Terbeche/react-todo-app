import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

let { todoContainerState } = this.state;

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    todoContainerState = { todos: [] };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== todoContainerState.todos) {
      const temp = JSON.stringify(todoContainerState.todos);
      localStorage.setItem('todos', temp);
    }
  }

          setUpdate = (updatedTitle, id) => {
            this.setState({
              todos: todoContainerState.todos.map((todo) => {
                if (todo.id === id) {
                  // eslint-disable-next-line no-param-reassign
                  todo.title = updatedTitle;
                }
                return todo;
              }),
            });
          }

          handleChange = (id) => {
            this.setState((prevState) => ({
              todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  };
                }
                return todo;
              }),
            }));
          };

          delTodo = (id) => {
            this.setState({
              todos: [
                ...todoContainerState.todos.filter((todo) => todo.id !== id),
              ],
            });
          };

            addTodoItem = (title) => {
              const newTodo = {
                id: uuidv4(),
                title,
                completed: false,
              };
              this.setState({
                todos: [...todoContainerState.todos, newTodo],
              });
            };

            render() {
              return (
                <div className="container">
                  <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList
                      todos={todoContainerState.todos}
                      handleChangeProps={this.handleChange}
                      deleteTodoProps={this.delTodo}
                      setUpdate={this.setUpdate}
                    />
                  </div>
                </div>
              );
            }
}
export default TodoContainer;
