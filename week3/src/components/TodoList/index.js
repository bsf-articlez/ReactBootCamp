import React, { Component } from "react";
import MyInput from "../MyInput";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleMessage = e => {
    const { value } = e.target;
    this.setState({ message: value });
  };

  onPushTodo = e => {
    if (e.key === "Enter") {
      console.log("Enter Now");
    }
  };

  render() {
    const { message } = this.state;
    return (
      <MyInput
        value={message}
        onChange={this.handleMessage}
        onEnter={this.onPushTodo}
      />
    );
  }
}

export default TodoList;
