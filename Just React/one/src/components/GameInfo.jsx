import React from "react";

export default function GameInfo({ status, onReset, onUndo, moves, currentMove }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium">{status}</span>
        <div className="space-x-2">
          <button onClick={onUndo} disabled={currentMove === 0} className="border px-3 py-1 rounded">
            Undo
          </button>
          <button onClick={onReset} className="border px-3 py-1 rounded">
            Reset
          </button>
        </div>
      </div>
      <ol className="text-sm">{moves}</ol>
    </div>
  );
}
