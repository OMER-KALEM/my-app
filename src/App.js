 import './App.css';
import { Component } from 'react';
// import User from "./components/User";
import Navbar from "./components/Navbar";
import Users from './components/Users';

class App extends Component{
  state = {
    users : [
      {
        id : 1,
        name : "Omer",
        salary : "5000",
        department : "bilisim"
      },
      {
        id : 2,
        name : "Omer2",
        salary : "50002",
        department : "bilisim2"
      },
      {
        id : 3,
        name : "Omer3",
        salary : "50003",
        department : "bilisim3"
      }
    ]
  }


  render(){

    return(

      <div className="container">
        <Navbar title="User App 2"/> 
        <hr/>
        <Users users = {this.state.users}/>
        
      </div>
    );
  }
}
export default App;