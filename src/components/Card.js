import React, { useState, useEffect } from "react";

function Card(props) {
  return (
    <div value={props.name} id="card" onClick={props.handleClick}>
      <div>{props.name}
      <img width="200px" height="200px" src={props.img}/>
      </div>
      

     
    </div>
  );
}

export default Card;
