import React, {useState} from 'react'
//import React from 'react'
import Child from './Child.jsx'

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
          return (
            <div className="App">
                <h1>App Component</h1>
            </div>
        )

        return (
          <div className="App">
              <h1>App Component</h1>
              <h3>User Input: {input}</h3>
              <input
        type="text"
        placeholder="Type Something Cool"
        onChange={(e) => setInput(e.target.value)} />
              <Child />
          </div>
      )
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

   
  );
}

export default App;
