import React, { Component } from "react";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";

class TodoList extends Component {
  
  addItem = newItem => {
    newItem.id = Math.random();
    let newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems
    });
  };
  deleteItem = itemId => {
    let items = this.state.items.filter(item => {
        return (
            item.id !== itemId
        )
    })
    this.setState({
        items
    })
  }
  render() {
    const { items } = this.props;
    const itemsList = items ? (
      items.map(item => {
        return (
          <li className="row" key={item.id} onClick={() => this.deleteItem(item.id)}>
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

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(TodoList);
