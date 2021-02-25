import React, { Component } from "react";
import Pagination from "../pagination/Pagination";
import Actu from "./Actu";
import Menu from "../menu/Menu";
import Layout from "../Layout";
import "../../scss/module/actus.scss";

import DATA from "../../test/data.js";

export class Actus extends Component {
  /**
   * Replace articles by : [] and nbPages by 0
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      nbPages: 0,
      nbActusMax: 12,
    };
    this.getPageArticles = this.getPageArticles.bind(this);
  }

  /**
   * Load All Articles
   */
  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}articles`)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            articles: res,
            nbPages: parseInt(res.length / this.state.nbActusMax),
          });
        },
        (err) => {
          console.log("Error fetch : " + err);
        }
      );
  }

  /**
   * Create each link to the articles for this page
   */
  getPageArticles() {
    let { articles, nbActusMax } = this.state;
    let { page } = this.props.match.params;
    if (page === undefined) page = 1;
    page = parseInt(page, 10);
    let pageIndex = page * nbActusMax - nbActusMax;

    return (
      <>
        {articles.slice(pageIndex, pageIndex + nbActusMax).map((v) => {
          console.log(v);
          return <Actu value={v} />;
        })}
      </>
    );
  }

  render() {
    let { page } = this.props.match.params;
    let { nbPages } = this.state;

    if (page === undefined) page = 1;
    page = parseInt(page, 10);

    return (
      <Layout className="actus">
        <div className="row">{this.getPageArticles()}</div>
        <div className="row">
          <Pagination page={page} nbPages={nbPages} />
        </div>
      </Layout>
    );
  }
}

export default Actus;
