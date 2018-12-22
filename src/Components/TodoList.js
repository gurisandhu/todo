import React, { Component } from "react";
// import TodoForm from "./TodoForm";
import { connect } from "react-redux";

class TodoList extends Component {
  // addItem = newItem => {
  //   newItem.id = Math.random();
  //   let newItems = [...this.state.items, newItem];
  //   this.setState({
  //     items: newItems
  //   });
  // };
  state = {
    content: ""
  };
  deleteItem = itemId => {
    let items = this.state.items.filter(item => {
      return item.id !== itemId;
    });
    this.setState({
      items
    });
  };
  handleNewItem = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    const { items } = this.props;
    const itemsList = items ? (
      items.map(item => {
        return (
          <li
            className="row"
            key={item.id}
            onClick={() => this.deleteItem(item.id)}
          >
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
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              placeholder="Enter Task"
              id="enter_task"
              type="text"
              className="validate"
              onChange={this.handleNewItem}
              value={this.state.content}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: content => {
      dispatch({
        type: "ADD_ITEM",
        content
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
