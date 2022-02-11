import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>Fixed Number: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1,
              };
            },
            () => {
              console.log('setState() is called');
              console.log(this.state);
            });

            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
