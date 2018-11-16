import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import Modal from "react-modal";
import { SignUp } from "./SignUp/SignUp";
import { Login } from "./Login/Login";

Modal.setAppElement(document.getElementById("root"));
class App extends Component {
  constructor() {
    super();
    this.state = {
      loginModalOpen: false,
      signUpModalOpen: false
    };
  }

  openLoginModal = () => {
    this.setState({
      loginModalOpen: true,
      signUpModalOpen: false
    });
  };

  closeLoginModal = () => {
    this.setState({ loginModalOpen: false });
  };

  openSignUpModal = () => {
    this.setState({
      signUpModalOpen: true,
      loginModalOpen: false
    });
  };

  closeSignUpModal = () => {
    this.setState({ signUpModalOpen: false });
  };

  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to="/">Home</Link>
          </header>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Modal
              isOpen={this.state.loginModalOpen}
              onRequestClose={this.closeLoginModal}
            >
              <button onClick={this.openSignUpModal}>Sign up</button>
              <Login />
              <button onClick={this.closeLoginModal}>X</button>
            </Modal>
            <Modal
              isOpen={this.state.signUpModalOpen}
              onRequestClose={this.closeSignUpModal}
            >
              <button onClick={this.openLoginModal}>Login</button>
              <SignUp />
              <button onClick={this.closeSignUpModal}>X</button>
            </Modal>
          </div>
          <footer>
            <button onClick={this.openLoginModal}>Sign up/Login</button>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
