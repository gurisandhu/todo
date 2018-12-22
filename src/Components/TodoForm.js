import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Enter Task"
              id="enter_task"
              type="text"
              className="validate"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default TodoForm;
