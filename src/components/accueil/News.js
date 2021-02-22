import React from "react";
import Score from "./Score";
import Actu from "./Actu";

function News() {
  return (
    <div className="news col-lg-3">
      <Score />
      <Actu />
      <Actu />
      <Actu />
      <Actu />
    </div>
  );
}

export default News;
