import {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import DivisionComponents from "./DivisionComponents";
import ArrayComponent from "./ArrayComponent";
import ErrorBoundary from "./ErrorBoundary"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import LifeCycleExample from "./LifeCycleExample";
import Modal from "./Modal";

function App(){
  const [show,setShow]=useState(false);
  return(
    <>
      {/* <LifeCycleExample/> */}
      {/* <p>Click to toggle</p>
      <button onClick={()=>setShow(!show)}> {show ? 'hide':'show'} Component</button>
      {show && <LifeCycle/>} */}
      {/* <List/> */}
      {/* <ErrorBoundary>
      <DivisionComponents a={10} b={5}/>
        </ErrorBoundary>
      <ErrorBoundary>
        <ArrayComponent/>
      </ErrorBoundary> */}
      {/* <h1>Student Portal</h1>
      <nav>
        <Link to='/'>Home  </Link><br/>
        <Link to='/about'>About  </Link><br/>
        <Link to='/contact'>Contact  </Link><br/>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes> */}
      <h2>React Portal example</h2>
      <button onClick={()=>setShow(true)}>Open</button>
      {show && (
        <Modal>
          <h3>This is portal</h3>
          <button onClick={()=>setShow(false)}>close</button>
        </Modal>
      )}
    </>
  );
}

export default App;