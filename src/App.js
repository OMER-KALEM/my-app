 import './App.css';
import { Component } from 'react';
// import User from "./components/User";
import Navbar from "./components/Navbar";
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends Component{

  render(){

    return(

      <div className="container">
        <Navbar title="User App 2"/> 
        <hr/>
        <AddUser/>
        <Users />
        
      </div>
    );
  }
}
export default App;