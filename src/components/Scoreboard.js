import React, { useState, useEffect } from "react";
import Field from "./Field";

function Scoreboard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const changeCurrentScore = (number) => setCurrentScore(currentScore + number);

  return (
    <div>
      <div>Score: {currentScore}</div>
      <div>Highscore: {bestScore}</div>
      <Field changeCurrentScore={changeCurrentScore} />
    </div>
  );
}

export default Scoreboard;
