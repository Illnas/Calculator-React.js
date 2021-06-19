import { useState } from "react"
import { evaluate } from 'mathjs'



function App() {
  const [numbers] = useState([
    {
      num: "1",
      id: "one"
    },
    {
      num: "2",
      id: "two"
    },
    {
      num: "3",
      id: "three"
    },
    {
      num: "4",
      id: "four"
    },
    {
      num: "5",
      id: "five"
    },
    {
      num: "6",
      id: "six"
    },
    {
      num: "7",
      id: "seven"
    },
    {
      num: "8",
      id: "eight"
    },
    {
      num: "9",
      id: "nine"
    },   
  ]);

  const [operations] = useState([
    {
      op: "+",
      id: "add"
    },
    {
      op: "-",
      id: "subtract"
    },
    {
      op: "*",
      id: "multiply"
    },
    {
      op: "/",
      id: "divide"
    },
  ])

  const [input, setInput] = useState("");
  const [point, setPoint] = useState(true);

  const getResult = () => {
    setInput(evaluate(input));
  }

  const display = (e) => {
    setInput(input + e.target.value);
  }

  const onFunc = (e) => {
    let bool = /\d+/.test(input.toString().slice(-2));
    if (!bool) {
      setInput(input.slice(0, -2) + e.target.value);
      setPoint(true);
    } else {
      setInput(input + e.target.value);
      setPoint(true);
    }
  }

  const clear = () => {
    setInput("");
    setPoint(true);
  }

  const zeros = (e) => {
    let bool = /\d|\./.test(input.toString().slice(-1));
    if (input === "" || bool === false) {
      return;
    } else {
      setInput(input + e.target.value);
    }
  }

  const dots = (e) => {
    if (point === true) {
      setInput(input + e.target.value);
      setPoint(false);
    }
  }
  
  return (
    <div className="main">
        <h1>React Calculator</h1>
              <div id="display">{input === "" ? `0` : input}</div>
              <div className="container">
                {numbers.map((e) => <button onClick={display} value={e.num}id={e.id}>{e.num}</button>)}
                <button value="." id="decimal" onClick={dots}>.</button>
                <button onClick={zeros} value="0" id="zero">0</button>
                <button id="equals" onClick={getResult}>=</button>
              </div>
              <div className="operation-container">
                {operations.map((e) => <button onClick={onFunc} id={e.id} value={e.op}>{e.op}</button>)}
                <button id="clear" onClick={clear}>Clear</button>
              </div>     
      </div>

  );
}

export default App;