const Controller = ({ reset, active, status }) => {
  return (
    <div className="wrapper-control">
      <button
        className={`${status} fh`}
        onClick={() => active((isActive) => !isActive)}
      >
        {status}
      </button>
      <button className="reset fh" onClick={reset}>
        Resset
      </button>
    </div>
  );
};
export default Controller;
