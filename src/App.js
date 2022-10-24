import React, {useState} from "react";
import "./App.css";

function App() {

  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 style={{textDecoration:"underline"}}>Counter App Using States</h1>
      <div>
        <h2>Current Value of Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=> count>0?setCount(count-1):""}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
