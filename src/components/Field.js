import React, { useState, useEffect } from "react";
import Card from "./Card";

function Field(props) {
  const [board, setBoard] = useState(["A", "B", "C"]);

  useEffect(() => {
    const changeScore = () => {
      props.changeCurrentScore(1);
    };

    document.addEventListener("click", changeScore);
  });

  return (
    <div>
      <ul>
        {board.map((card) => (
          <Card name={card} />
        ))}
      </ul>
    </div>
  );
}

export default Field;
