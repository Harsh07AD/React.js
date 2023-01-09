import A from "./Components/A";
import B from "./Components/B";
import "./App.css";
import { useState } from "react";

function App() {
  const [valueA, updatedA] = useState(0);
  const [valueB, updatedB] = useState(0);

  function increaseA() {
    updatedA(valueA + 1);
  }

  function decreaseA() {
    updatedA(valueA - 1);
  }

  function increaseB() {
    updatedB(valueB + 1);
  }

  function decreaseB() {
    updatedB(valueB - 1);
  }

  return (
    <>
      <h1 className="text-center m-3 text-primary shadow-lg">
        Props And State Page
      </h1>
      <div className="container main-container shadow-lg my-2 py-2">
        <h1 className="text-center m-5">
          Increase & Decrease Value of A and B
        </h1>
        <div className="container row m-5">
          <h3 className="text-center col">A = {valueA}</h3>
          <h3 className="text-center col">B = {valueB}</h3>
          <div className="container button-container ms-auto text-center">
            <button onClick={increaseA} className="btn btn-dark mx-2">
              A+
            </button>
            <button onClick={decreaseA} className="btn btn-dark mx-2">
              A-
            </button>
            <button onClick={increaseB} className="btn btn-dark mx-2">
              B+
            </button>
            <button onClick={decreaseB} className="btn btn-dark mx-2">
              B-
            </button>
          </div>
        </div>
      </div>
      <A valueA={valueA} valueB={valueB} increaseA = {increaseA} increaseB = {increaseB}/>
      <B valueA={valueA} valueB={valueB} decreaseA = {decreaseA} decreaseB = {decreaseB}/>
    </>
  );
}

export default App;
