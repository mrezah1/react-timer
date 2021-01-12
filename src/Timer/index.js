import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let timer = null;

  const ressetHandler = () => {
    clearTimeout(timer);
    setIsActive(false);
    setCounter(0);
  };
  useEffect(() => {
    if (isActive) {
      timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    }
    return () => clearTimeout(counter);
  }, [counter, isActive]);

  const checkActive = isActive ? "Pause" : "Start";
  return (
    <section className="timer">
      <h2 className={checkActive}>{counter}</h2>
      <div>
        <button onClick={() => setIsActive(!isActive)}>{checkActive}</button>
        <button onClick={ressetHandler}>Resset</button>
      </div>
    </section>
  );
};

export default Timer;
