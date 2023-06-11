import React, { useState, useEffect } from "react";
import "./App.css";
import Alertt from "./components/Alertt";
import Navbar from "./components/Navbar";
import TextForm from "./components/textform";

function App() {
  const [alert, setAlert] = useState(null);
  const [darkmode, setDarkMode] = useState(
    localStorage.getItem("setDarkMode") || "light"
  );

  const toggleMode = () => {
    if (darkmode === "light") {
      setDarkMode("dark");
      showAlert("Dark mode has been enabled");
    } else {
      setDarkMode("light");
      showAlert("Light mode has been enabled");
    }
  };

  useEffect(() => {
    if (darkmode === "light") {
      document.body.style.cssText = "background-color:#fff; color:#000";
      // // for text
      document.getElementById("text").style.cssText = `
            background-color: #fff;
            color: #000;
            `;
      // for preview textarea
      document.getElementById("prevTxt").style.cssText = `
            background-color: #fff;
            color: #000;
            cursor: none;
            `;
    } else {
      document.body.style.cssText = "background-color:#242D40; color:#fff";
      // for text
      document.getElementById("text").style.cssText = `
              background-color: #213440;
              color: #fff;
              border: dashed black;
              max-height: 300px;
              &:focus > #text {
                outline:none }
              `;
      // for preview textarea
      document.getElementById("prevTxt").style.cssText = `
              background-color: #213440;
              color: #fff;
              border: dashed black;
              cursor: none;
              `;
    }
    localStorage.setItem("setDarkMode", darkmode);
  }, [darkmode]);

  // Alert Popup
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="">
      <Navbar mode={darkmode} toggleMode={toggleMode} />

      <TextForm heading="Customize Your Text" summaryHead="Preview :" />

      <Alertt alert={alert} />
    </div>
  );
}

export default App;
