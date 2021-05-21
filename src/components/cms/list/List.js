import React, { Component } from "react";
import ListTable from "./ListTable";
import { accessToken } from "../../../utils";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keys: [],
      response: "",
    };
    this.fetchList = this.fetchList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getSchema = this.getSchema.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }

  getSchema() {
    switch (this.props.schema) {
      case "accueil":
      case "club":
      case "infos":
      case "arbitrage":
      case "contact":
        return "pages";
      default:
        return this.props.schema;
    }
  }

  getIndex() {
    switch (this.props.schema) {
      case "club":
        return process.env.REACT_APP_CLUB_ID;
      case "infos":
        return process.env.REACT_APP_INFOS_ID;
      case "arbitrage":
        return process.env.REACT_APP_ARBITRAGE_ID;
      default:
        return "";
    }
  }

  fetchList() {
    let schema = this.getSchema();
    let index = this.getIndex();
    fetch(`${process.env.REACT_APP_API_URI}${schema}?index=${index}`)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ data: res });
        },
        (err) => {
          console.log("Error fetch : " + err);
        }
      );
  }

  deleteItem(e) {
    let { schema } = this.getSchema();
    let { id } = e.target.dataset;
    let headers = new Headers({ Authorization: accessToken() });
    fetch(`${process.env.REACT_APP_API_URI}${schema}?id=${id}`, {
      method: "DELETE",
      headers: headers,
    })
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ response: res });
          this.fetchList();
        },
        (err) => {
          this.setState({ response: err });
          console.log("Error fetch : " + err);
        }
      );
  }

  componentDidMount() {
    this.fetchList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.schema !== this.props.schema) {
      this.fetchList();
    }
    if (prevState.data.length !== this.state.data.length) {
      this.fetchList();
    }
  }

  render() {
    let { deleteItem } = this;
    let { data } = this.state;
    let schema = this.getSchema();

    return (
      <ListTable data={data} deleteFunction={deleteItem} schema={schema} />
    );
  }
}

export default List;
