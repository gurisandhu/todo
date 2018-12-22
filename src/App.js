import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TodoList />
      </div>
    );
  }
}

export default App;
