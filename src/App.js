import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", count: 1 },
    { id: 2, name: "Watermelon", count: 0 },
    { id: 3, name: "Pear", count: 3 },
  ]);

  const handleDecrease = (id) => {
    console.log("handleDecrease(). id:", id);

    setProducts((prevProducts) => {
      const index = prevProducts.findIndex((x) => x.id === id);
      const productsCopy = [...prevProducts];
      const productCopy = { ...productsCopy[index] };
      productCopy.count--;
      productsCopy[index] = productCopy;

      return productsCopy;
    });
  };

  const handleIncrease = (id) => {
    console.log("handleIncrease(). id:", id);

    setProducts((prevProducts) => {
      const index = prevProducts.findIndex((x) => x.id === id);
      const productsCopy = [...prevProducts];
      const productCopy = { ...productsCopy[index] };
      productCopy.count++;
      productsCopy[index] = productCopy;

      return productsCopy;
    });
  };

  const counters = products.map((product) => (
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
