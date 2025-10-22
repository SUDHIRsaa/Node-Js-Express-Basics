import React from "react";
import Square from "./Sqarue";

export default function Board({ squares, onClick, winningLine }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {squares.map((val, i) => (
        <Square
          key={i}
          value={val}
          onClick={() => onClick(i)}
          isHighlight={winningLine?.includes(i)}
        />
      ))}
    </div>
  );
}
