 import './App.css';
import { Component } from 'react';
// import User from "./components/User";
import Navbar from "./components/Navbar";
import User from './components/User';

class App extends Component{

  render(){

    return(

      <div className="container">
        <Navbar title="User App 2"/> 
        <hr/>
        <User
        name = "Omer"
        salary = "100"
        department = "bilisim"

        />

        <User
        // name = "Omer2"
        // salary = "1002"
        department = "bilisim2"

        />
        
      </div>
    );
  }
}
export default App;