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
            <div>
                <ul>
                    <li>Isim: {name}</li>
                    <li>Maas: {salary}</li>
                    <li>Departman: {department}</li>
                </ul>
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
