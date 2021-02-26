import React, { Component } from "react";
import CMSLayout from "./CMSLayout";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      access_token: "",
      response: "",
    };

    this.connect = this.connect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    switch (e.target.id) {
      case "username":
        this.setState({ username: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  }

  connect() {
    let { REACT_APP_API_URI } = process.env;
    let { username, password } = this.state;

    let jsonToPost = {
      username: username,
      password: password,
    };

    let headers = new Headers({ "Content-Type": "application/json" });

    let requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(jsonToPost),
    };

    fetch(`${REACT_APP_API_URI}login`, requestOptions)
      .then((res) => res.json())
      .then((res, err) => {
        if (err) return console.log(err);
        this.setState({ response: "Clear", access_token: res.access_token });
        window.sessionStorage.setItem("access_token", res.access_token);
      });
  }

  render() {
    let { username, password, response } = this.state;
    return (
      <CMSLayout>
        <div id="login">
          <label for="username">Utilisateur :</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={this.handleChange}
          />
          <label for="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="button" value="Se connecter" onClick={this.connect} />
          <p>{response}</p>
        </div>
      </CMSLayout>
    );
  }
}

export default Login;
