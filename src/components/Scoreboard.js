import React, { useState, useEffect } from "react";
import Field from "./Board";

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div>
      <div>Score: {currentScore}</div>
      <div>Highscore: {bestScore}</div>
    </div>
  );
}

export default Scoreboard;
