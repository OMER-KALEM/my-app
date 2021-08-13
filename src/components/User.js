import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

    static defaultProps = {
        name : "Bilgi Yok",
        salary : "Bilgi yok",
        department : "Bilgi yok"
    }

    constructor(props){
        super(props);

        this.state = {
            test : "Test",
            isvisible: true
        }
        //this.onClickEvent = this.onClickEvent.bind(this);
    }

//Arrow function ile normal function arasındaki fark ;
//Arrow function "bind" islemini otomatik kendisi yapıyor    
    onClickEvent = (number, e) => {
        //console.log(e.target);
        //console.log("test");
        console.log(this);
        console.log(number);
    }

    render() {

        const {name,department,salary} = this.props;
        const {isvisible} = this.state;

        return (
           <div className="col-md-8 mb-4">
               <div className="card">
                   <div className="card-header d-flex justify-content-between">
                       <h4 className= "d-inline" onClick = {this.onClickEvent.bind(this, 34)}>{name}</h4>
                       <i className="far fa-trash-alt" style= {{cursor : "pointer"}}></i>
                   </div>

                    {
                        isvisible ? 
                        <div className="card-body">
                        
                            <p className= "card-text"> Maas : {salary}</p>
                            <p className= "card-text"> Department : {department}</p>
                            <p>{this.state.test}</p>
                    
                        </div> : null
                    }
               </div>
           </div>
        )
    }
}
/*
User.defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi yok",
    department : "Bilgi yok"

}
*/

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

export default User;
