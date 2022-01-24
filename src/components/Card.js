import React, { useState, useEffect } from "react";

function Card(props) {
  return (
    <div value={props.name} id="card" onClick={props.handleClick}>
      {props.name}
    </div>
  );
}

export default Card;
