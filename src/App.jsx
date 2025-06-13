// src/App.js
import React, { useState } from "react";
import questions from "./questions";
import Question from "./Component/Question";
import Result from "./Component/Result";
import Timer from "./Component/Timer";

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[index].answer) {
      setScore(score + 1);
    }
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
      {!isFinished ? (
        <>
          <Timer setIsFinished={setIsFinished} />
          <Question
            data={questions[index]}
            handleAnswer={handleAnswer}
            index={index}
            total={questions.length}
          />
        </>
      ) : (
        <Result score={score} total={questions.length} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
