import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = document.getElementById("root");
function Add() {
  const [counter, setCounter] = React.useState(1);
  const add = () => {
    // setCounter(counter + 1);
    setCounter( (current) => current + 1);
  };
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={add}>ADD</button>
    </div>
  );
}

function Minus() {
  const [counter, setCounter] = React.useState(1);
  const minus = () => {
    setCounter( (current) => current - 1);
  };
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={minus}>MINUS</button>
    </div>
  );
}

function Double() {
  const [counter, setCounter] = React.useState(1);
  const double = () => {
    // setCounter(counter + 1);
    setCounter( (current) => current * 2);
  };
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={double}>DOUBLE</button>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Add />
    <Minus />
    <Double />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
