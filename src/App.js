import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;


// import React, {useState} from "react";
// import "./App.css";

// function App() {
//   const [val, setVal] = useState("");
//   const [result, setResult] = useState("");

//   // const getResult = () => {
//   //   let ans = Function("return " + val)();
//   //   setResult(ans);
//   // }
  
//   return (
//     <div className="App">
//       <h1>React Calculator</h1>
//       <input type = "text" className='inp' value={val}></input>
//       {result && <p>{result}</p>}
//       <div className='box'>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>7</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>8</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>9</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>+</button>
//       </div>
//       <div className='box'>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>4</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>5</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>6</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>-</button>
//       </div>
//       <div className='box'>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>1</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>2</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>3</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>*</button>
//       </div>
//       <div className='box'>
//         <button className='btn' onClick = {(e) => setVal("")}>C</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>0</button>
//         <button className='btn'>=</button>
//         <button className='btn' onClick = {(e) => setVal(val + e.target.value)}>/</button>
//       </div>
//     </div>
//   );
// }

// export default App;
