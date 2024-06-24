import React, { useState } from "react";
import Register from "./pages/Registered.jsx";
import Login from "./pages/Login.jsx";
import Headbar from "./components/Headbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import About from "./components/About.jsx";
import AltHeadbar from "./components/AltHeadbar.jsx";


function App() {
  const [showForm, setShowForm] = useState("register");

  function formChange() {
    setShowForm((presentValue) => (presentValue === "register" ? "login" : "register"));
  }

  const location = useLocation();
  const currentpath = location.pathname;

  return (
    <div className=" vh-100 vw-100">
      {
        currentpath == '/dashboard' ? <AltHeadbar/> : <Headbar formChange={formChange} />
      }

      {/* <div style={{height:'87%'}} className=" w-100">
        {showForm === "register" ? <Register formChange={formChange} /> : <Login formChange={formChange} />}
      </div> */}

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Register />} />
        </Routes>

    </div>
  );
}

export default App;


// types of export -- name-export || default-report
// cdn npm bootstrap
// state variable
// uplifting-downlifting
// cannot keep hook outside function
// two-way binding
// optional operator
// local storage data stays in browser
// callback function