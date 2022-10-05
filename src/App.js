import React from "react";
import "./App.css";
import { Counter } from "./counter/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Apple", count: 1 },
        { id: 2, name: "Watermelon", count: 0 },
        { id: 3, name: "Pear", count: 3 },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="counters">{this.createCounters()}</div>
      </div>
    );
  }

  createCounters() {
    return this.state.products.map((product) => (
      <div key={product.id}>
        <Counter
          label={product.name}
          value={product.count}
          onDecrease={() => this.handleDecrease(product.id)}
          onIncrease={() => this.handleIncrease(product.id)}
        />
      </div>
    ));
  }

  handleDecrease = (id) => {
    console.log("handleDecrease(). id:", id);

    const index = this.state.products.findIndex((x) => x.id === id);
    const productsCopy = [...this.state.products];
    const productCopy = { ...productsCopy[index] };
    productCopy.count--;
    productsCopy[index] = productCopy;

    this.setState({ products: productsCopy });
  };

  handleIncrease = (id) => {
    console.log("handleIncrease(). id:", id);

    const index = this.state.products.findIndex((x) => x.id === id);
    const productsCopy = [...this.state.products];
    const productCopy = { ...productsCopy[index] };
    productCopy.count++;
    productsCopy[index] = productCopy;

    this.setState({ products: productsCopy });
  };
}

export default App;
