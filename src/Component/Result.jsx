// src/components/Result.jsx
import React from "react";

function Result({ score, total, onRestart }) {
  return (
    <div className="bg-white p-6 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
      <p className="text-lg mb-2">Your Score: {score} / {total}</p>
      <button
        onClick={onRestart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
