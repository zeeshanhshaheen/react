import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return <h2 onMouseOver={IncrementCount}>Hovered {count} Times</h2>;
  }
}

export default HoverCounter2;
