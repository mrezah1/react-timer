const TypeControl = ({ type, handler }) => {
  let increment = `increment fh`;
  let decrase = `decrase fh`;
  if (type === "increment") increment += " active";
  else decrase += " active";
  return (
    <div className="type-control">
      <button className={increment} onClick={() => handler("increment")}>
        Increment
      </button>
      <button className={decrase} onClick={() => handler("decrase")}>
        Decrase
      </button>
    </div>
  );
};
export default TypeControl;
