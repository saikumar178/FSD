import React, { Component } from 'react'

// const Welcome = (props) => {
//   return (
//     <>
//       <h2>Student Details:</h2>
//       <h3>Name: {props.name} ---  Age: {props.age}</h3>
//     </>
//   )
// }

class Welcome extends Component{
  render(){
    return <h3>Welcome to the class component {this.props.name} of {this.props.age} years!!</h3>;
  }
}

export default Welcome
