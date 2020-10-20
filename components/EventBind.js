import React, { Component } from "react";
{/* BInding Event Handlers */}
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this)
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "Good bye",
  //     });
  //   }
  clickHandler = () => {
    this.setState({
      message: "Good Bye",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*performabce issues*/} 
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
