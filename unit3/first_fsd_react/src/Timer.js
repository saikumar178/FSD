import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('hello')
    },[])
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </>
  )
}

export default Timer
