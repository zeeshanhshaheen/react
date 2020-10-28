import React from "react";

function UserGreeting(props) {
  return <h1>Welcome Back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

// using variables to store elements

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  handleLogin = () => {
    return(<h1>Hello Login</h1>);

  };

  handleLogout = () => {
    console.log('hekl')
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogout} />;
    } else {
      button = <LoginButton onClick={this.handleLogin} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
export default LoginControl;

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div>warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: false,
    };
  }
  handleToggleChange() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={() => this.handleToggleChange()}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default Page
