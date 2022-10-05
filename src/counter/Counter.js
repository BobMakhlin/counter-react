import React from "react";

export class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <button className="counter__btn" onClick={this.props.onDecrease}>-</button>
                <span className="counter__value">{this.props.value}</span>
                <button className="counter__btn" onClick={this.props.onIncrease}>+</button>
            </div>
        );
    }
}