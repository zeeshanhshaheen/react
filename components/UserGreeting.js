import React, { Component } from "react";

// conditionally rendring UI's 

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // Short Circuit Approach
    // return this.state.isLoggedIn && <div>Welcome Zeeshan </div>;

    // ternary Approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Zeeshan</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Element variable approach
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Zeeshan</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // if else approach
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Zeeshan</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Zeeshan</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
