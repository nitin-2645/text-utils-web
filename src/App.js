import "./App.css";
import Home from "./components/Home";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    console.log(message)
    console.log(type)
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( () =>{
  setAlert(null); 
    }, 5000);
  } 
  const removeBodyClasses=(cls)=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
  }

  /**@desc for setting dark mode and white mode */
  const toggleMode = (cls) => {
    console.log(cls)
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title= 'TextUtils - DarkMode'
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode has been enabled", "success");
      document.title= 'TextUtils - LightMode'
    }
  };
  console.log(alert)
  return (
    <>
      <Router>
        <Home title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <TextForm showAlert={showAlert}
                  heading="TextUtils-Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
