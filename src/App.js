import React from "react";
import "./App.css";
import { Counter } from "./counter/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Counter
          value={this.state.count}
          onDecrease={this.handleDecrease}
          onIncrease={this.handleIncrease}
        />
      </div>
    );
  }

  handleDecrease = () => {
    console.log("decrease");
    this.setState({count: this.state.count - 1});
  };

  handleIncrease = () => {
    console.log("increase");
    this.setState({count: this.state.count + 1});
  };
}

export default App;
