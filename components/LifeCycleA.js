import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Zeeshan",
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  render() {
    console.log("LifeCycleA Render");
    return (
      <div>
        <div> LifeCycle A </div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
