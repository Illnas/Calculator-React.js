import { useState } from "react"

function App() {
  const [numbers] = useState([
    {
      num: 1,
      id: "one"
    },
    {
      num: 2,
      id: "two"
    },
    {
      num: 3,
      id: "three"
    },
    {
      num: 4,
      id: "four"
    },
    {
      num: 5,
      id: "five"
    },
    {
      num: 6,
      id: "six"
    },
    {
      num: 7,
      id: "seven"
    },
    {
      num: 8,
      id: "eight"
    },
    {
      num: 9,
      id: "nine"
    },
    {
      num: ".",
      id: "decimal"
    },
    {
      num: 0,
      id: "zero"
    },
    {
      num: "=",
      id: "equals"
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
    {
      op: "Clear",
      id: "clear"
    },
  ])



  return (
    <div className="main">
      <div id="display">First line</div>
      <div id="display-second">Second line</div>
      <div id="display-third">Result</div>

      <div className="container">{numbers.map((e) => <button id={e.id}>{e.num}</button>)}</div>
      <div className="operation-container">{operations.map((e) => <button  id={e.id}>{e.op}</button>)}</div>

    </div>
  );
}

export default App;
