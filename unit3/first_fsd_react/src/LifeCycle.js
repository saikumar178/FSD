import {useState,useEffect} from 'react'

const LifeCycle = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log('component is mount or updated');
        document.title = `You Clicked ${count} times`;
        return()=>{
            console.log('Component is unmount');
        }
    },[count]);


  return (
    <>
      <h4>This is LifeCycle component</h4>
      <p>You Clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </>
  )
}

export default LifeCycle
