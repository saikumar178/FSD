import React from 'react'

const Welcome = (props) => {
  return (
    <>
      <h2>Student Details:</h2>
      <h3>Name: {props.name} ---  Age: {props.age}</h3>
    </>
  )
}

export default Welcome
