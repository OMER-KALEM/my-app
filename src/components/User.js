import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    /*
    //User.defaultProps ile ayni islevde
    static defaultProps = {
        name : "Bilgi Yok",
        salary : "Bilgi yok",
        department : "Bilgi yok"
    }*/
    render() {

        //Destructing

        const {name,department,salary} = this.props;

        return (
            /*Cirkin gozukuyor o yuzden duzenliycem*/ 
            /*
            <div>
                <ul>
                    <li>Isim: {name} <i className="far fa-trash-alt"></i> </li>
                    <li>Maas: {salary}</li>
                    <li>Departman: {department}</li>
                </ul>
            </div>
            */
           <div className="col-md-8 mb-4">
               <div className="card">
                   <div className="card-header d-flex justify-content-between">
                       <h4 className= "d-inline">{name}</h4>
                       <i className="far fa-trash-alt" style= {{cursor : "pointer"}}></i>
                   </div>
                    <div className="card-body">
                        <p className= "card-text"> Maas : {salary}</p>
                        <p className= "card-text"> Department : {department}</p>
                    </div>
               </div>
           </div>
        )
    }
}
User.defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi yok",
    department : "Bilgi yok"

}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

export default User;
