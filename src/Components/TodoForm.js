import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    content: ""
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
    return (
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
    );
  }
}

export default TodoForm;
