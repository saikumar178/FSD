import React from 'react'

const ArrayComponent = () => {
    const array = [10,20,30];
    let index = 1;

    if(index >= array.length){
        throw new Error('Array index Out of Bount');
    }

  return (
    <div style={{textAlign: 'center'}}>
      <h3>Number at index {index} is {array[index]}</h3>
    </div>
  )
}

export default ArrayComponent
