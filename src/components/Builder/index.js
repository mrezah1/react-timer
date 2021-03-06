import "./style.css";
import ArrowUp from "../../assets/up-arrow.svg";
import ArrowDown from "../../assets/down-arrow.svg";
const Builder = ({ value, controlHandler, control }) => {
  const { increment, decrase } = controlHandler;
  return (
    <div className="builder">
      <p>{value}</p>
      {control && (
        <div className="control-time">
          <div className="fh" onClick={increment}>
            <img src={ArrowUp} />
          </div>
          <div className="fh" onClick={decrase}>
            <img src={ArrowDown} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Builder;
