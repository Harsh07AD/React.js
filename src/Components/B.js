import React from 'react'

export default function B(props) {
  return (
    <div className="container b-container shadow-lg my-2 py-2">
      <h1 className="text-center m-5">Decrease value Of A and B</h1>
      <div className="container row m-5">
        <h3 className="text-center col">A = {props.valueA}</h3>
        <h3 className="text-center col">B = {props.valueB}</h3>
        <div className="container button-container ms-auto text-center">
          <button onClick={props.decreaseA} className="btn btn-dark mx-2">A-</button>
          <button onClick={props.decreaseB} className="btn btn-dark mx-2">B-</button>
        </div>
      </div>
    </div>
  );
}
