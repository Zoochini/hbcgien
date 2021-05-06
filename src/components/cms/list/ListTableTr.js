import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListTable from "./ListTable";
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
            case "ref":
              break;
            case "dateNaissance":
            case "date":
              let d = new Date(data[v]);
              return (
                <ListTableTd
                  className="cell"
                  data={
                    (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) +
                    "/" +
                    (d.getMonth() < 10
                      ? "0" + (d.getMonth() + 1)
                      : d.getMonth() + 1) +
                    "/" +
                    d.getFullYear()
                  }
                />
              );
            case "index":
              return <ListTableTd className="cell" data={data[v].name} />;
            default:
              return <ListTableTd className="cell" data={data[v]} />;
          }
        })}
        <ListTableTd
          className="last-cell"
          data={
            <Link to={`${schema}/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
              </svg>
            </Link>
          }
        />
        <ListTableTd
          className="last-cell"
          data={
            <Link>
              <svg
                onClick={deleteFunction}
                data-id={id}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
              </svg>
            </Link>
          }
        />
      </tr>
    );
  }
}

export default ListTableTr;
