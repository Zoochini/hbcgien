import React, { Component } from "react";
import { Redirect } from "react-router";
import { loggedIn } from "../../utils";
import CMSLayout from "./CMSLayout";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      access_token: null,
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
        res.access_token !== undefined
          ? window.sessionStorage.setItem("access_token", res.access_token)
          : this.setState({ response: res.message });
      });
      setTimeout(() => {
        this.forceUpdate()
      }, 3000);
  }



  render() {
    let { username, password, response, access_token } = this.state;
    console.log(this.state);
    console.log(window.sessionStorage.getItem("access_token"));
    return !loggedIn() ? (
      <CMSLayout className="cms-login">
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
      </CMSLayout>
    ) : (
      <Redirect to="/__admin/articles" />
    );
  }
}

export default Login;
