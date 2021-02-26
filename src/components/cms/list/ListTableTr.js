import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListTableTd from "./ListTableTd";

export class ListTableTr extends Component {
  render() {
    let { data, deleteFunction, schema } = this.props;
    let id = data["_id"];
    return (
      <tr>
        {Object.keys(data).map((v) => {
          switch (v) {
            case "_id":
            case "tel":
            case "image":
            case "categorie":
            case "__v":
            case "joueurs":
            case "content":
            case "file":
              break;
            case "dateNaissance":
              let d = new Date(data[v]);
              return (
                <ListTableTd
                  data={d.getDay() + "/" + d.getDate() + "/" + d.getFullYear()}
                />
              );
            default:
              return <ListTableTd data={data[v]} />;
          }
        })}
        <ListTableTd
          data={
            <Link to={`${schema}/${id}`}>
              <span
                class="oi oi-pencil"
                title="pencil"
                aria-hidden="true"
              ></span>
            </Link>
          }
        />
        <ListTableTd
          data={
            <Link>
              <span
                class="oi oi-x"
                title="x"
                aria-hidden="true"
                data-id={id}
                onClick={deleteFunction}
              ></span>
            </Link>
          }
        />
      </tr>
    );
  }
}

export default ListTableTr;
