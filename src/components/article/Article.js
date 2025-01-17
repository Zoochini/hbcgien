import React, { Component } from "react";
import marked from "marked";
import parse from "html-react-parser";
import Layout from "../Layout";

export class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      date: null,
    };
  }

  /**
   * Load Article
   */
  componentDidMount() {
    const REACT_APP_API_URI = process.env.REACT_APP_API_URI + "articles";
    let { id } = this.props.match.params;

    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch(`${REACT_APP_API_URI}?id=${id}`, requestOptions)
      .then((res) => res.json())
      .then(
        (res) => {
          if (res != null) {
            this.setState({
              title: res.title,
              content: res.content,
              date: new Date(res.date),
            });
          } else {
            this.setState({
              title: "Article non existant",
              content: "L'article recherché est introuvable.",
            });
          }
        },
        (err) => {
          console.log("Error fetch : ");
        }
      );
  }

  render() {
    let { title, content, date } = this.state;
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">{parse(marked(title))}</div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-justify">{parse(marked(content))}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-justify">
                {date !== null
                  ? (date.getDate() < 10
                      ? "0" + date.getDate()
                      : date.getDate()) +
                    "/" +
                    (date.getMonth() < 10
                      ? "0" + date.getMonth()
                      : date.getMonth()) +
                    "/" +
                    date.getFullYear()
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Article;
