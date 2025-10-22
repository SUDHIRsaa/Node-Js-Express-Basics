import React from "react";

export default function Square({ value, onClick, isHighlight }) {
  return (
    <button
      onClick={onClick}
      className={`w-20 h-20 flex items-center justify-center text-2xl font-bold rounded-md border focus:outline-none ${
        isHighlight ? "bg-yellow-200 border-yellow-500" : "bg-white hover:bg-slate-50"
      }`}
    >
      {value}
    </button>
  );
}
