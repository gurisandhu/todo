import React, { Component } from "react";
import TodoForm from "./TodoForm";

const TodoData = [
  {
    content: "Apples",
    id: 1
  },
  {
    content: "Mangoes",
    id: 2
  },
  {
    content: "Onions",
    id: 3
  },
  {
    content: "Garlic",
    id: 4
  }
];

class TodoList extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.setState({
      items: TodoData
    });
  }
  addItem = newItem => {
    newItem.id = Math.random();
    let newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems
    });
  };
  render() {
    const { items } = this.state;
    const itemsList = items ? (
      items.map(item => {
        return (
          <li className="row" key={item.id}>
            <label>
              <input type="checkbox" />
              <span>{item.content}</span>
            </label>
          </li>
        );
      })
    ) : (
      <li className="row">
        <label>
          <span>No more item</span>
        </label>
      </li>
    );
    return (
      <div className="container">
        <ul className="row">{itemsList}</ul>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoList;
