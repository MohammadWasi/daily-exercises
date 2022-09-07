import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  const showAlert = () => {
    setTimeout(() => {
      alert('You  clicke on count ' + count);
    }, 3000);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={showAlert}>Show alert</button>
    </div>
  );
}

export default App;
