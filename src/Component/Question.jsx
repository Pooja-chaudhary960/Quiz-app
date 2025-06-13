import React from "react";

function Question({ data, handleAnswer, index, total }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">
        Q{index + 1}. {data.question}
      </h2>
      <div className="space-y-3">
        {data.options.map((option, i) => (
          <button
            key={i}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        {index + 1} of {total} questions
      </p>
    </div>
  );
}

export default Question;
