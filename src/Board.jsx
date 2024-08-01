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

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const handleClick = (idx) => {
    const nextSquare = square.slice();
    // toggling the next player X/O
    if (next) {
      nextSquare[idx] = "X";
    } else {
      nextSquare[idx] = "O";
    }
    setSquare(nextSquare);
    setNext(!next);
  };

  return (
    <div>
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
    </div>
  );
}

export default Board;
