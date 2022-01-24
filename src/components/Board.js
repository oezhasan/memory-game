import React, { useState, useEffect } from "react";
import Card from "./Card";

function Board(props) {
  return (
    <div>
      {props.board.map((card) => (
        <Card handleClick={props.handleClick} name={card} />
      ))}
    </div>
  );
}

export default Board;
