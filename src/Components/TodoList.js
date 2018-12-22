import React, { Component } from "react";
import TodoForm from './TodoForm';

class TodoList extends Component {
  render() {
    return (
      <div className="container">
        <ul className="row">
          <li className="row">
            <label>
              <input type="checkbox" />
              <span>Red</span>
            </label>
          </li>
          <li className="row">
            <label>
              <input type="checkbox" />
              <span>Red</span>
            </label>
          </li>
          <li className="row">
            <label>
              <input type="checkbox" />
              <span>Red</span>
            </label>
          </li>
        </ul>
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;