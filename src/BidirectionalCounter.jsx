import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./App"
function BidirectionalCounter() {
  const [count, setCount] = useState(0);
  const [counterStart, setCounterStart] = useState(false);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    let timer;

    if (counterStart) {
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= 10) {
            setDirection("down");
            return prev - 1;
          } else if (prev <= 0) {
            setDirection("up");
            return prev + 1;
          } else {
            return direction === "up" ? prev + 1 : prev - 1;
          }
        });
      }, 500);
    }

    return () => clearInterval(timer);
  }, [counterStart, direction]);

  const StartStopbtn = () => {
    setCounterStart((prev) => !prev);
  };

  const reset = () => {
    setCount(0);
    setCounterStart(false);
    setDirection("up");
  };

  return (
    <div >
      <h2>Bidirectional Counter</h2>
      <p>
      
         Running Direction: {direction === "up" ? <FaArrowUp /> : <FaArrowDown />}
      </p>

      <p>status running:{direction === "up" ? "Up": "Down"}</p>
      <h1>{count}</h1>
      <div>
        <button onClick={reset} >
          Reset
        </button>
        <button onClick={StartStopbtn} >
          {counterStart ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default BidirectionalCounter;
