import React, { Component } from "react";
import Pagination from "./pagination/Pagination";
import { ActusRow } from "./ActusRow.js";
import DATA from "../test/data.js";
import Menu from "./menu/Menu";

export class Actus extends Component {
  /**
   * Replace articles by : [] and nbPages by 0
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      nbPages: 0,
    };
    this.getPageArticles = this.getPageArticles.bind(this);
  }

  /**
   * Load All Articles
   * Add res to articles to test
   * Add nbPages: res.length/process.env.REACT_APP_ACTUS_MAX_BY_PAGE to test
   * Add ${process.env.REACT_APP_API_URI}
   */

  //TO DECOMMENT THIS IS FUNCTIONNAL ------------------------------------!

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}articles`)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ articles: res });
        },
        (err) => {
          console.log("Error fetch : " + err);
        }
      );
  }

  /**
   * Get articles for this page, create rows
   */
  getPageArticles(page) {
    const REACT_APP_ACTUS_MAX_BY_PAGE = parseInt(
      process.env.REACT_APP_ACTUS_MAX_BY_PAGE
    );
    const REACT_APP_ACTUS_MAX_BY_ROW = parseInt(
      process.env.REACT_APP_ACTUS_MAX_BY_ROW
    );
    const { articles } = this.state;
    let rows = [];
    for (
      let i = page * REACT_APP_ACTUS_MAX_BY_PAGE - REACT_APP_ACTUS_MAX_BY_PAGE;
      i < page * REACT_APP_ACTUS_MAX_BY_PAGE;
      i += REACT_APP_ACTUS_MAX_BY_ROW
    ) {
      rows.push(
        <ActusRow value={articles.slice(i, i + REACT_APP_ACTUS_MAX_BY_ROW)} />
      );
    }
    return rows;
  }

  render() {
    let { page } = this.props.match.params;
    let nbPages =
      this.state.articles.length / process.env.REACT_APP_ACTUS_MAX_BY_PAGE;

    if (page === undefined) page = 1;
    page = parseInt(page, 10);

    let rows = this.getPageArticles(page);

    console.log(this.state.articles);

    return (
      <div>
        <Menu />
        <div id="actus" className="container my-2 py-2">
          {rows}
          <Pagination page={page} nbPages={nbPages} />
        </div>
      </div>
    );
  }
}

export default Actus;
