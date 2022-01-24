import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import React, { useState, useEffect } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [board, setBoard] = useState([]);
  const [clickedCards, setClickedCard] = useState([]);

  const cardNames = [
    "Java",
    "Python",
    "C",
    "C#",
    "C++",
    "JavaScript",
    "TypeScript",
    "Ruby",
    "Elixir",
  ];

  const handleClick = (card) => {
    setClickedCard([...clickedCards, card.target.innerHTML]);
    if (clickedCards.indexOf(card.target.innerHTML) !== -1) {
      changeScore(0);
      setClickedCard([]);
    } else {
      changeScore(currentScore + 1);
      if (currentScore >= bestScore) setBestScore(currentScore + 1);
    }
  };
  const changeScore = (numb) => {
    setCurrentScore(numb);

    console.log(clickedCards);
  };

  useEffect(() => {
    const rollBoard = () => {
      const newBoard = Array.from({ length: 9 }, () => {
        return cardNames[Math.floor(Math.random() * 9)];
      });

      setBoard(newBoard);
    };

    rollBoard();
  }, [currentScore]);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Board handleClick={handleClick} board={board} cardNames={cardNames} />
    </div>
  );
}

export default App;
