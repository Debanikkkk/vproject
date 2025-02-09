import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickHere from './components/clickhere';
import cutecat from './media/cutecat.gif'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WillubemyValentine from './components/willubemyvalentine';
import Home from './components/home';
function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      
      <header className="App-header">
        
      <BrowserRouter>
        <Routes>
        <Route path="/" Component={Home}/>

          <Route path="/willubemyvalentine" Component={WillubemyValentine}/>

          
        </Routes>
        </BrowserRouter>
     

      </header>
    </div>
  );
}

export default App;
