import React, { Component } from 'react'

 class TestMounting extends Component {
     constructor(props) {
         super(props);
         console.log(this.props);
         this.state = {
             a:10
         }
         console.log("constructor çalıştı")    
     }
     componentDidMount() {
         console.log("Did mount")
         //uzaktaki rest api den aldığımız json dosyasıyla gğncellemek istiyorum...
         // API isteklerimizi burada gerceklesitiricez.
         this.setState({
             a:20
         })
     }
     

     
    render() {
        console.log("render edildi")
        console.log(this.state)
        return (
            <div>
                
            </div>
        )
    }
}



export default TestMounting;