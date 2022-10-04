import React from "react";
import "./App.css";
import {Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Crud from "./crud";

function App() {
  return (
    <div className="App">
     <h1>Student's List</h1>
      <ToastContainer />        
      <Routes>
        <Route exact path="/" component={Crud}/>
      </Routes>      
    </div>
  );
}

export default App;
