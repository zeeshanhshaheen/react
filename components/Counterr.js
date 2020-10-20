import React, { Component } from "react";

class Counterr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  IncrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.IncrementCount)}</div>
    );
  }
}

export default Counterr;
