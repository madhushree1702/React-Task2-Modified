import React from 'react';
import './App.css';
import Table from './Table';
//import TableExample from './TableExample';


function App() {
  return (
    <div className="Search">
      <input type="text" placeholder="Search"/>
      <button> Submit </button>
      <br /><br />
      <Table />
    </div>
  )
}

export default App;  
