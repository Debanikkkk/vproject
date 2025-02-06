import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickHere from './components/clickhere';

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <div className="fade-text" >hello</div>
        <h1 onClick={() => setVisible(!visible)} className="clicktocontinue">"click to continue"</h1>
        {visible && (
          <ClickHere />
        )}
      </header>
    </div>
  );
}

export default App;
