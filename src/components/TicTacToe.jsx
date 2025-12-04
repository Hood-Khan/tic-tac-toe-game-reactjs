import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    console.log(index, "click");

    const newBoard = [...board];
    // newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500">
      <div className="space-y-3 bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30">
        {/* <div className="flex space-x-3">
          <button onClick={() => handleClick(0)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[0]}</button>
          <button onClick={() => handleClick(1)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
          <button onClick={() => handleClick(2)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
        </div>

        <div className="flex space-x-3">
          <button onClick={() => handleClick(3)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
          <button onClick={() => handleClick(4)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
          <button onClick={() => handleClick(5)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
        </div>

        <div className="flex space-x-3">
          <button onClick={() => handleClick(6)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
          <button onClick={() => handleClick(7)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
          <button onClick={() => handleClick(8)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"></button>
        </div> */}

        <div className="grid grid-cols-3 gap-3">
          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-20 h-20 bg-white/80 text-3xl font-bold text-gray-800 rounded-xl hover:bg-white active:scale-95 transition-all shadow-md"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
