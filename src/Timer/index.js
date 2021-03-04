import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(7180);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  const [isActive, setIsActive] = useState(false);

  const ressetHandler = () => {};
  const setFormat = (num) => (num.toString().length === 1 ? `0${num}` : num);
  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        const hour = Math.floor(counter / 3600);
        const min = Math.floor((counter % 3600) / 60);
        const sec = Math.floor((counter % 3600) % 60);
        setCounter((prevCount) => prevCount + 1);
        setMinute(setFormat(min));
        setSecond(setFormat(sec));
        setHour(setFormat(hour));
      }, 1000);
    }
    return () => {
      console.log("clean Up");
      clearInterval(timer);
    };
  }, [counter, isActive]);

  const checkActive = isActive ? "Pause" : "Start";
  return (
    <section className="timer">
      <h2 className={checkActive}>
        {hour} : {minute} : {second}
      </h2>
      <div>
        <button onClick={() => setIsActive(!isActive)}>{checkActive}</button>
        <button onClick={ressetHandler}>Resset</button>
      </div>
    </section>
  );
};

export default Timer;
