import { StrictMode,useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => count - 1);
  };

  return (
    <div>
      
      <span style={counter<0?{color:"red"}:{color:"green"}}>{counter}</span>
      <div >
        <button onClick={increase} >+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}