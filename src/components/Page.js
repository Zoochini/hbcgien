import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import marked from "marked";
import parse from "html-react-parser";

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
    res.json().then((res) => setContent(res[0].content));
  };

  useEffect(() => {
    fetchPage();
  });

  return (
    <Layout>
      <div className="row">
        <div className="col"> {parse(marked(content))}</div>
      </div>
    </Layout>
  );
};

export default Page;
