import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  /*
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
      this.setState({
        message: e.target.value,
      });
    }

    handleClick() {
      alert(this.state.message);
      this.setState({
        message: '',
      });
    }
    */

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(`${this.state.username}: ${this.state.message}`);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Enter message"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>Check</button>
      </div>
    );
  }
}

export default EventPractice;
