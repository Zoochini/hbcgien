import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import marked from "marked";
import parse from "html-react-parser";
import NotFound from "./NotFound";
import Inscription from "./inscription/Inscription";
import Boutique from "./boutique/Boutique";

const Page = (props) => {
  const [content, setContent] = useState("");

  const fetchPage = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URI}pages?ref=${props.match.params.ref}`,
      {
        method: "GET",
        headers: new Headers(),
      }
    );
    res
      .json()
      .then((res) =>
        res[0] !== undefined ? setContent(res[0].content) : setContent(null)
      );
  };

  const Base = () => {
    return (
      <div className="row">
        <div className="col">{parse(marked(content))}</div>
      </div>
    );
  };

  useEffect(() => {
    fetchPage();
    if (content === "Not found") return <NotFound />;
  });

  switch (props.match.params.ref) {
    case null:
      return <NotFound />;
    //TO DO___________________________________________________________
    case "inscription":
      return (
        <Layout>
          <Base />
          <Inscription />
        </Layout>
      );
    case "boutique":
      return (
        <Layout>
          <Base />
          <Boutique />
        </Layout>
      );
    default:
      return content === null ? (
        <NotFound />
      ) : (
        <Layout>
          <Base />
        </Layout>
      );
  }
};

export default Page;
