import React, {useEffect, useState} from "react";
import Score from "./Score";
import Actu from "./Actu";

function News() {
  const [actus, setActus] = useState([]);

  const fetchActus = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URI}articles`, {
      method: "GET",
      headers: new Headers(),
    });
    res.json().then((res) => setActus(res.slice(0, 4)));
  };

  useEffect(() => {
    fetchActus();
  }, []);

  return (
    <div className="news col-lg-3">
      <Score />
      {actus.map((v) => {
        return <Actu value={v.title} path={v._id} />;
      })}
    </div>
  );
}

export default News;
