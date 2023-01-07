import "./index.css"
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // count++;  wrong practice

    setCount(count + 1);
  }

  const decrement = () => {
    // count--;

    setCount(count - 1);
  }
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p className="btn">{count}</p>
      <button onClick={decrement} className="btn">-</button>
      <button onClick={increment} className="btn">+</button>
    </div>
  )
}

export default App;
