import React, { useState } from "react";

export default function Task3() {
  // 🔹 Flashcard toggle state
  const [flipped, setFlipped] = useState(false);

  // 🔹 Dynamic color input state
  const [color, setColor] = useState("red");

  return (
    <>
      {/* 🧩 Flashcard Grid */}
      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="bg-red-300 p-4  text-center font-bold rounded-md">Box 1</div>
        <div className="bg-green-300 p-4 text-center font-bold rounded-md">Box 2</div>

        {/* 🔁 Flashcard Box */}
        <div
          className={`relative w-full h-32 cursor-pointer perspective`}
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`transition-transform duration-500 transform ${
              flipped ? "rotate-y-180" : ""
            } relative w-full h-full`}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-blue-300 flex items-center justify-center text-2xl font-bold rounded-md">
              Front
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-purple-300 flex items-center justify-center text-2xl font-bold rounded-md">
              Back
            </div>
          </div>
        </div>

        <div className="bg-yellow-300 p-4 text-center font-bold rounded-md">Box 4</div>
        <div className="bg-pink-300 p-4 text-center font-bold rounded-md">Box 5</div>
        <div className="bg-purple-300 p-4 text-center font-bold rounded-md">Box 6</div>
      </div>

      {/* 🎨 Color Changing Grid */}
      <div className="grid grid-cols-5 gap-1 p-4">
        <div
          className={`p-4 text-center font-bold rounded-md transition-all duration-300`}
          style={{ backgroundColor: color }}
        >
          BOX
        </div>
        <div className="bg-green-300 p-4 text-center font-bold rounded-md">Box 2</div>
        <div className="bg-blue-300 p-4 text-center font-bold rounded-md">Box 3</div>
        <div className="bg-yellow-300 p-4 text-center font-bold rounded-md">Box 4</div>
        <div className="bg-pink-300 p-4 text-center font-bold rounded-md">Box 5</div>
      </div>

      <div className="p-4 flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Type a color (e.g., red, blue, green)"
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

    
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </>
  );
}
