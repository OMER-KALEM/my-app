import React, { Component } from 'react'


const UserContext = React.createContext();
const reducer = (state,action) => {
  switch(action.type){
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    default:
      return state
  } 
}
//Provider, Consumer

export class UserProvider extends Component {
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
        ],
        //dispatch actionları gonderdiğimiz funcrion
        dispatch : action => {
          this.setState (state => reducer(state,action))
        }
    }
    render() {
        return (
            
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


const UserConsumer = UserContext.Consumer;

export default UserConsumer;

