import React, { Component } from "react";

export class SignUp extends Component {
  submitSignUp = e => {
    e.preventDefault();
    alert("Sign up clicked");
  };
  render() {
    return (
      <form onSubmit={this.submitSignUp}>
        Email:
        <input type="text" name="email" />
        Password:
        <input type="password" name="email" />
        Confirm Password:
        <input type="password" name="email" />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}
