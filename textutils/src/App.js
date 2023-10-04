
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState} from "react";

function App() {
  const [mode, setMode] = useState('dark') ;//whether dark mode is enabled or not
  return (
    <>
      {/* <Navbar title="TextUtils2"  aboutText="About Text"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze"/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
