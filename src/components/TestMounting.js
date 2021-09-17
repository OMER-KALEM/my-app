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
     componentDidUpdate(prevProps, prevState) {
         console.log("eski prop:" + prevProps);
         console.log("eski state:" + prevState);
         console.log("component did update") 
     }
     ///sumary
     /// method otomatik calisiyor zaten sen yazmasan da ve true donduruyor
     ///sumary
     shouldComponentUpdate(nextProps, nextState) {
         console.log("should componet update")
         return true; // default deger true
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