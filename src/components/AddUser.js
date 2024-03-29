import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';

var uniqid = require("uniqid");

const HideAndShowAnimation = posed.div({
    visible: { 
        opacity: 1,
        applyAtStart: {
            display : "block"
        }
    },

    hidden: {
        opacity: 0,
        applyAtEnd: {
            display : "none"
        }
    }
  });

  
class AddUser extends Component {
    state = {
        visible : false,
        name :"",
        department :"",
        salary:""
    }

    changeVisibilty = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addUser = (dispatch,e) => {
        e.preventDefault();
        const{name,department,salary} = this.state;

        const newUser = {
            id : uniqid(),
            // "name":name,
            // "department":department,
            // "salary":salary
            //key-value ayni deger oldugu icin soyle yapilabilri;
            name,
            department,
            salary
        }
        dispatch({type: "ADD_USER",payload: newUser});
    }

    render() {
        const {visible,name,department,salary} = this.state;
        
        return <UserConsumer>
            {
                value => {
                    const{dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibilty} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                            <HideAndShowAnimation pose = {visible ? "visible" : "hidden"}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit = {this.addUser.bind(this,dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                            type = "text"
                                            name = "name"
                                            id = "id"
                                            placeholder = "Enter Name"
                                            className = "form-control"
                                            value = {name}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="department">Department</label>
                                            <input
                                            type = "text"
                                            name = "department"
                                            id = "department"
                                            placeholder = "Enter Department"
                                            className = "form-control"
                                            value = {department}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="salary">Salary</label>
                                            <input
                                            type = "text"
                                            name = "salary"
                                            id = "salary"
                                            placeholder = "Enter Salary"
                                            className = "form-control"
                                            value = {salary}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
                                        <button className ="btn btn-danger btn-block" type="submit">Add User</button>
                                    </form>
                                </div>
                            </div>
                            </HideAndShowAnimation>
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}


export default AddUser;