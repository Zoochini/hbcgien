import React, { Component } from "react";
import ListTableHeader from "./ListTableHeader";
import ListTableTr from "./ListTableTr";

export class ListTable extends Component {
  render() {
    let { data, deleteFunction, schema } = this.props;
    return (
      <table className="table table-hover">
        <ListTableHeader data={data[0]} />
        <tbody>
          {data.map((v) => {
            return <ListTableTr data={v} deleteFunction={deleteFunction} schema={schema} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ListTable;
