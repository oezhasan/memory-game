import React, { useState, useEffect } from "react";

function Card(props) {
  return (
    <div value={props.name} id="card" onClick={props.handleClick}>
      <img width="150px" height="150px" src={props.img} />
      {props.name}
    </div>
  );
}

export default Card;
