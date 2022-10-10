const Counter = (props) => {
  return (
    <div className="counter">
      <div className="counter__header">{props.label}</div>
      <div className="counter__actions">
        <button className="counter__btn" onClick={props.onDecrease}>
          -
        </button>
        <span className="counter__value">{props.value}</span>
        <button className="counter__btn" onClick={props.onIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
