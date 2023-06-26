import { React } from "react";
import "./styles.css";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  const [neg, setNeg] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    //setNeg(neg-1);
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={handleIncrement}>Increment </button>
      <button onClick={handleDecrement}> Decrement</button>
      <h2>{count}</h2>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <MyButton />
    </div>
  );
}
