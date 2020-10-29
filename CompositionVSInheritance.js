import React, { Component } from "react";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h1>Welcome</h1>
//             <p>Thankyou for visiting</p>
//         </FancyBorder>

//     )
// }

// Special Component

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

// function WelcomeDialog() {
//   return <Dialog title="Welcome" message="Thank you for visiting.." />;
// }

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      login: "",
    };
  }
  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Program" message="How should we refer you">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }
}

// class CompositionVSInheritance extends Component {
//   render() {
//     return <div></div>;
//   }
// }

export default SignUpDialog;
