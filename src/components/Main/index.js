import React, { useState, useEffect } from "react";
import { Timer, Controller, TypeControl } from "./Components";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [type, setType] = useState("increment");
  const [isActive, setIsActive] = useState(false);

  const ressetHandler = () => {
    setCounter(0);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setIsActive(false);
  };
  useEffect(() => {
    let timer = null;
    function tickHandler() {
      const hour = Math.floor(counter / 3600);
      const min = Math.floor((counter % 3600) / 60);
      const sec = Math.floor((counter % 3600) % 60);
      setCounter((prevCount) => {
        if (type === "increment") return prevCount + 1;
        else return prevCount > 0 ? prevCount - 1 : ressetHandler();
      });
      setMinute(min);
      setSecond(sec);
      setHour(hour);
    }
    if (isActive) {
      timer = setInterval(tickHandler, 1000);
    }
    return () => clearInterval(timer);
  }, [counter, isActive]);

  const controlHandler = (type) => {
    const handlers = {
      hour: setHour,
      minute: setMinute,
      second: setSecond,
    };
    const stateFn = handlers[type];
    const incrementHandler = () => {
      setCounter((prevCount) => prevCount + getUnit(type));
      stateFn((prevNum) => (prevNum < 59 ? prevNum + 1 : prevNum));
    };
    const decraseHandler = () => {
      setCounter((prevCount) =>
        prevCount - getUnit(type) > 0 ? prevCount - getUnit(type) : 0
      );
      stateFn((prevNum) => (prevNum > 0 ? prevNum - 1 : prevNum));
    };
    return {
      increment: incrementHandler,
      decrase: decraseHandler,
    };
  };
  const getUnit = (type) => {
    let result = null;
    switch (type) {
      case "hour":
        result = 3600;
        break;
      case "minute":
        result = 60;
        break;
      case "second":
        result = 1;
        break;
    }
    return result;
  };
  const status = isActive ? "Pause" : "Start";
  const units = { hour, minute, second };
  return (
    <section className="main">
      {!isActive && <TypeControl type={type} handler={setType} />}
      <Timer isActive={isActive} controlHandler={controlHandler} unit={units} />
      <Controller reset={ressetHandler} active={setIsActive} status={status} />
    </section>
  );
};

export default Main;
