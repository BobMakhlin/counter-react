import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <div className="counter__header">
            {this.props.label}
        </div>

        <div className="counter__actions">
          <button className="counter__btn" onClick={this.props.onDecrease}>
            -
          </button>
          <span className="counter__value">{this.props.value}</span>
          <button className="counter__btn" onClick={this.props.onIncrease}>
            +
          </button>
        </div>
      </div>
    );
  }
}
