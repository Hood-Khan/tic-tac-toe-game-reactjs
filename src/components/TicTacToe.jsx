import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  // Handle a cell click
  const handleClick = (index) => {
    if (board[index] || winner) return; // ignore if cell filled or game over

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };

  // Check winner using for loop
  const checkWinner = (newBoard) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return combinations[i];
      }
    }

    return null;
  };

  // Check if board is full
  const isBoardFull = (board) => board.every((cell) => cell !== null);

  // SweetAlert effect
  useEffect(() => {
    if (winner) {
      Swal.fire({
        title: "Game Over!",
        text: `${winner} is the winner! 🏆`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else if (isBoardFull(board) && !winner && board.some((cell) => cell !== null)) {
      Swal.fire({
        title: "Game Over!",
        text: "It's a draw! 🤝",
        icon: "info",
        confirmButtonText: "OK",
      });
    }
  }, [winner, board]);

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 space-y-6">
      {/* Board container */}
      <div className="space-y-3 bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30">

        {/* Original flex-based board layout (commented out) */}
        {/*
        <div className="flex space-x-3">
          <button onClick={() => handleClick(0)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[0]}</button>
          <button onClick={() => handleClick(1)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[1]}</button>
          <button onClick={() => handleClick(2)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[2]}</button>
        </div>

        <div className="flex space-x-3">
          <button onClick={() => handleClick(3)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[3]}</button>
          <button onClick={() => handleClick(4)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[4]}</button>
          <button onClick={() => handleClick(5)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[5]}</button>
        </div>

        <div className="flex space-x-3">
          <button onClick={() => handleClick(6)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[6]}</button>
          <button onClick={() => handleClick(7)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[7]}</button>
          <button onClick={() => handleClick(8)} className="w-20 h-20 bg-white/80 text-xl rounded-xl hover:bg-white active:scale-95 transition-all shadow-md">{board[8]}</button>
        </div>
        */}

        {/* New grid-based board layout */}
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

      {/* Reset button outside the board */}
      <button
        onClick={resetGame}
        className="
          w-60 py-3
          bg-purple-600 text-white font-semibold
          rounded-xl shadow-lg
          hover:bg-purple-700 active:scale-95
          transition-all
        "
      >
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
