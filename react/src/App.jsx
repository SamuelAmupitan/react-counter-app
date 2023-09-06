import { useState } from "react";
import "./App.css";
// import { ChevronUp } from "react-feather";
import * as Icon from "react-feather";

function App() {
  const [count, setCount] = useState(0);

  // increase by 1
  const increaseByOne = (e) => {
    setCount((count) => count + 1);
  };

  // increase by 10
  const increaseByTen = (e) => {
    setCount((count) => count + 10);
  };

  // reset count to zero
  const resetToZero = (e) => {
    setCount(0);
  };
  
    // set the count to a random number between 1 and 100
    const setToRandomNumber = (e) => {
      setCount(() => Math.floor(Math.random() * 99) + 1);
    };

  // decrease the count  by 10
    const decreaseByTen = (e) => {
      setCount(() => count - 10);
    };
  
  // decrease the count by 1
    const decreaseByOne = (e) => {
      setCount(() => count - 1);
    };
  

    return (
      <>
        <div className="card">
          <h3>Current Value</h3>
          <h1>{count}</h1>
          <button onClick={increaseByOne}>
            <Icon.ChevronUp color="black" />
          </button>
          <button onClick={increaseByTen}>
            <Icon.ChevronsUp color="black" />
          </button>
          <button onClick={resetToZero}>
            <Icon.RotateCcw color="black" />
          </button>
          <button onClick={setToRandomNumber}>
            <Icon.Hash color="black" />
          </button>
          <button onClick={decreaseByTen}>
            <Icon.ChevronsDown color="black" />
          </button>
          <button onClick={decreaseByOne}>
            <Icon.ChevronDown color="black" />
          </button> 
        </div>
      </>
    );
  };

  
  // export app
  export default App;
