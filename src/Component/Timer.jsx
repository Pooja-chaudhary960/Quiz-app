import React, { useState, useEffect } from "react";

function Timer({ setIsFinished }) {
  const [seconds, setSeconds] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    if (seconds <= 0) {
      setIsFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, setIsFinished]);

  const minutes = Math.floor(seconds / 60);
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="mb-4 text-lg font-medium text-red-600">
      Time Left: {minutes}:{secs}
    </div>
  );
}

export default Timer;
