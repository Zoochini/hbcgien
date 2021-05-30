import React, { useState, useEffect } from "react";

function Score() {
  const [score, setScore] = useState({
    equipe1: "",
    equipe2: "",
    score1: "",
    score2: "",
  });

  const fetchScore = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URI}scores`, {
      method: "GET",
      headers: new Headers(),
    });
    res.json().then((res) => {
      setScore({
        equipe1: res[0].equipe1,
        equipe2: res[0].equipe2,
        score1: res[0].score1,
        score2: res[0].score2,
      });
    });
  };

  useEffect(() => {
    fetchScore();
  }, []);

  let { equipe1, equipe2, score1, score2 } = score;
  return (
    <div className="score">
      <h1>Dernier match</h1>
      <br />
      <h4>{equipe1}</h4>
      <h1>
        {score1} - {score2}
      </h1>
      <h4>{equipe2}</h4>
    </div>
  );
}

export default Score;
