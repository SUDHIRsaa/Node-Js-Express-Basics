import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TicTacToe() {
  const emptyBoard = Array(9).fill(null);
  const [history, setHistory] = useState([emptyBoard]);
  const [currentMove, setCurrentMove] = useState(0);
  const board = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const calculateWinner = (squares) => {
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
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    if (squares.every(Boolean)) return { draw: true };
    return null;
  };

  const result = calculateWinner(board);

  function handleClick(i) {
    if (result || board[i]) return;
    const next = [...board];
    next[i] = xIsNext ? "X" : "O";
    const nextHistory = history.slice(0, currentMove + 1).concat([next]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([emptyBoard]);
    setCurrentMove(0);
  }

  function undo() {
    if (currentMove > 0) setCurrentMove(currentMove - 1);
  }

  const status = result
    ? result.draw
      ? "😶 It's a Draw!"
      : `🏆 Winner: ${result.winner}`
    : `Next Player: ${xIsNext ? "❌" : "⭕"}`;

  const renderSquare = (i) => {
    const isWinner = result?.line?.includes(i);
    return (
      <motion.button
        key={i}
        onClick={() => handleClick(i)}
        whileTap={{ scale: 0.9 }}
        className={`w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold 
          border-4 transition-all duration-300 
          ${isWinner ? "bg-amber-200 border-amber-500" : "bg-white/30 border-slate-300 hover:bg-white/60"}
          shadow-lg backdrop-blur-md`}
      >
        <span
          className={`${
            board[i] === "X" ? "text-pink-600" : "text-sky-600"
          } drop-shadow-md`}
        >
          {board[i]}
        </span>
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-100 to-sky-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/40 text-center"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-slate-800 tracking-tight">
          🎮 Tic Tac Toe
        </h1>

        <div className="grid grid-cols-3 gap-4 justify-center mb-6">
          {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
        </div>

        <p className="text-lg font-medium text-slate-700 mb-4">{status}</p>

        <div className="space-x-3">
          <button
            onClick={undo}
            disabled={currentMove === 0}
            className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 font-semibold hover:bg-slate-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Undo
          </button>
          <button
            onClick={resetGame}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold hover:opacity-90 shadow-md"
          >
            Reset
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Designed with ❤️ using React + Tailwind
        </p>
      </motion.div>
    </div>
  );
}
