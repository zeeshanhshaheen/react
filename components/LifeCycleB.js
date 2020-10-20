import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Zeeshan",
    };
    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
  render() {
    console.log("LifeCycleB Render");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
