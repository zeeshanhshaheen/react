import React, { Component } from "react";

class ClickCounter2 extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return <button onClick={IncrementCount}>Clicks {count} times</button>;
  }
}

export default ClickCounter2;
