import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="app">
      
      <Header />

    {/*Left side*/}
      <div className="app_body">
        <Sidebar />
      </div>



    </div>
  );
}

export default App;
