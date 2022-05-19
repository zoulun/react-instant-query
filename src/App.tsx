import React from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {
  const title = 'QQ号查询';
  return (
    <div className="app">
      <Header title={title}></Header>
    </div>
  );
}

export default App;
