import React from "react";
import Register from "./pages/Registered.jsx";
import Login from "./pages/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import About from "./components/About.jsx";
import Layout from "./layouts/Layout.jsx";
import { Authroute } from "./privateroutes/Authroute.jsx";
import { Unauthroute } from "./privateroutes/Unauthroute.jsx";


function App() {
 
  // const location = useLocation();
  // const currentpath = location.pathname;

  return (
    <div className=" vh-100 vw-100">

      <Routes>
        <Route path="/" element={<Layout></Layout>} >

          <Route path="/register" element={ <Unauthroute> <Register /> </Unauthroute>} />

          <Route path="/login" element={ <Unauthroute> <Login /> </Unauthroute> } />
          
          <Route path="/about" element={ <About /> } />
          <Route path="/dashboard" element={ <Authroute> <Dashboard /> </Authroute> } />
          <Route path="/" element={ <Unauthroute> <Register /></Unauthroute> } />

        </Route>
      </Routes>

    </div>
  );
}

export default App;

// higher order component
// props drilling
// child to parent : parent component has to send function as prop to child component , then only child can return the prop function to parent
// child to parent : child component cannot return value unless it has a prop function passed by parent component

