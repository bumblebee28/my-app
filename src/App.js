import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = '#ced4da'
      showAlert("Dark mode has been enabled.", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Dark mode has been enabled.", "success")
    }

  }

 
return (


  <Router>
    <Navbar title="Text Analyser" about="About Us" link="link" mode={mode} togglemode={toggleMode} />
    <div className="container">
      <Alert alert={alert} />
    </div>
    <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About mode={mode} />}>
        </Route>
        <Route path="/" element={<TextForm label="Enter your text here" mode={mode} showAlert={showAlert} />}>
        </Route>
      </Routes>
    </div>
  </Router>


);
}

export default App;
