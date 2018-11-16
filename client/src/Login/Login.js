import React, { Component } from "react";

export class Login extends Component {
  submitLogin = e => {
    e.preventDefault();
    alert("Login clicked");
  };
  render() {
    return (
      <form onSubmit={this.submitLogin}>
        Email:
        <input type="text" name="email" />
        Password:
        <input type="password" name="email" />
        <button type="submit">Login</button>
      </form>
    );
  }
}
