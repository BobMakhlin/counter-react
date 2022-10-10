import { useState } from "react";
import "./App.css";
import Counter from "./counter/Counter";

const App = () => {
  const initialState = {
    products: [
      { id: 1, name: "Apple", count: 1 },
      { id: 2, name: "Watermelon", count: 0 },
      { id: 3, name: "Pear", count: 3 },
    ],
  };
  const [state, setState] = useState(initialState);

  const handleDecrease = (id) => {
    console.log("handleDecrease(). id:", id);

    const index = state.products.findIndex((x) => x.id === id);
    const productsCopy = [...state.products];
    const productCopy = { ...productsCopy[index] };
    productCopy.count--;
    productsCopy[index] = productCopy;

    setState({ products: productsCopy });
  };

  const handleIncrease = (id) => {
    console.log("handleIncrease(). id:", id);

    const index = state.products.findIndex((x) => x.id === id);
    const productsCopy = [...state.products];
    const productCopy = { ...productsCopy[index] };
    productCopy.count++;
    productsCopy[index] = productCopy;

    setState({ products: productsCopy });
  };

  const counters = state.products.map((product) => (
    <div key={product.id}>
      <Counter
        label={product.name}
        value={product.count}
        onDecrease={() => handleDecrease(product.id)}
        onIncrease={() => handleIncrease(product.id)}
      />
    </div>
  ));

  return (
    <div className="App">
      <div className="counters">{counters}</div>
    </div>
  );
};

export default App;
