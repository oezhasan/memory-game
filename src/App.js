import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import React, { useState, useEffect } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [board, setBoard] = useState([]);
  const [clickedCards, setClickedCard] = useState([]);


  const shuffleBoard= async () =>{
    const response = await fetch("https://www.breakingbadapi.com/api/character/random?limit=9")
    const data = await response.json()
    return data
  }

  const handleClick = (card) => {
    setClickedCard([...clickedCards, card.currentTarget.innerText]);
    if (clickedCards.indexOf(card.currentTarget.innerText) !== -1) {
      changeScore(0);
      setClickedCard([]);
    } else {
      changeScore(currentScore + 1);
      if (currentScore >= bestScore) setBestScore(currentScore + 1);
    }
    console.log(clickedCards)
  };

  const changeScore = (numb) => {
    setCurrentScore(numb);

  };

  useEffect(() => {
    const rollBoard = async() => {
      const cards = await shuffleBoard();
      setBoard(cards);
    };

    rollBoard();
  }, [currentScore]);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Board handleClick={handleClick} board={board}  />
    </div>
  );
}

export default App;
