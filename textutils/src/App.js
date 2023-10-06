
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About"; // Uncomment this line if you intend to use the About component
import Alert from "./components/alert";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode activated", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode activated", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert}/>
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* Uncomment the following line if you intend to use the About component */}
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

