import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    console.log("Regular Component");
    return <div>Regular COmponent {this.props.name}</div>;
  }
}

export default RegularComp;
