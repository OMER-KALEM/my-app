 import './App.css';
import { Component } from 'react';
// import User from "./components/User";
import Navbar from "./components/Navbar";

class App extends Component{

  render(){

    return(

      <div className="container">
        <Navbar/> 
        <h3 className="header">User App</h3>
      </div>
    );
  }
}
export default App;