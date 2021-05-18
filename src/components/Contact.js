import React, { Component } from "react";
import marked from "marked";
import parse from "html-react-parser";
import Layout from "./Layout";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_API_URI}pages?id=${process.env.REACT_APP_CONTACT_ID}`
    )
      .then((res) => res.json())
      .then(
        (res) => this.setState({ content: res.content }),
        (err) => console.log("Error : " + err)
      );
  }

  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col">{parse(marked(this.state.content))}</div>
        </div>
      </Layout>
    );
  }
}

export default Contact;
