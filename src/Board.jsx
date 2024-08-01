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
  const handleClick = () => {
    const nextSquare = square.slice();
    nextSquare[0] = "X";
    setSquare(nextSquare);
  };

  return (
    <div>
      <div className="flex">
        <Square value={square[0]} onSquareClick={handleClick} />
        <Square value={square[1]} onSquareClick={handleClick} />
        <Square value={square[2]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={square[3]} onSquareClick={handleClick} />
        <Square value={square[4]} onSquareClick={handleClick} />
        <Square value={square[5]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={square[6]} onSquareClick={handleClick} />
        <Square value={square[7]} onSquareClick={handleClick} />
        <Square value={square[8]} onSquareClick={handleClick} />
      </div>
    </div>
  );
}

export default Board;
