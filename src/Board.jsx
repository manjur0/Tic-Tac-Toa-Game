/* eslint-disable react/prop-types */
import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-200 h-12 w-12  m-1 text-black text-center align-middle text-2xl font-semibold rounded-lg leading-9"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  // check for winner
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (next ? "X" : "O");
  }
  const handleClick = (idx) => {
    const nextSquare = square.slice();
    // validation for clicking on already clicked square
    if (square[idx] !== null || calculateWinner(square)) return; // index jodi khali hoy thaole likho or khali nahole return koro

    // toggling the next player X/O
    if (next) {
      nextSquare[idx] = "X";
    } else {
      nextSquare[idx] = "O";
    }
    setSquare(nextSquare);
    setNext(!next);
  };

  // reset the game
  const handleReset = () => {
    setSquare(Array(9).fill(null));
    setNext(true);
  };

  return (
    <div className="mt-10 flex justify-center gap-3 ">
      <div>
        <h1 className="text-2xl font-bold">{status}</h1>
        <div className="flex">
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <button
          className="text-2xl font-semibold bg-white text-black px-2 mx-2 rounded-sm"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold">One Step Back</h1>
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <div>
      <div>
        <Board />
      </div>
      <div>{/* TBD */}</div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
