import Builder from "../Builder";
const Timer = ({ controlHandler, isActive, unit }) => {
  const setFormat = (num) =>
    num.toString().length === 1 ? `0${num}` : `${num}`;
  const { hour, minute, second } = unit;
  return (
    <div className={`timer ${isActive ? "Pause" : "Start"}`}>
      <Builder
        value={setFormat(hour)}
        control={!isActive}
        controlHandler={controlHandler("hour")}
      />
      <p>:</p>
      <Builder
        value={setFormat(minute)}
        control={!isActive}
        controlHandler={controlHandler("minute")}
      />
      <p>:</p>
      <Builder
        value={setFormat(second)}
        control={!isActive}
        controlHandler={controlHandler("second")}
      />
    </div>
  );
};
export default Timer;