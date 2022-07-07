import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

let { todoInputState } = this.state;
const { todoInputProps } = this.props;
const { todoInputSetState } = this.setState;

class InputTodo extends Component {
  constructor(props) {
    super(props);
    todoInputState = { title: '' };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (todoInputState.title.trim()) {
      todoInputProps.addTodoProps(todoInputState.title);
      todoInputSetState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={todoInputState.title}
          name="title"
          onChange={this.onChange}
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = PropTypes.node;

export default InputTodo;
