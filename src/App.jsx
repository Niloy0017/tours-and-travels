import React, { lazy, Suspense } from "react";
import Register from "./pages/Registered.jsx";
import Login from "./pages/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Layout from "./Layout.jsx";
import { Authroute } from "./privateroutes/Authroute.jsx";
import { Unauthroute } from "./privateroutes/Unauthroute.jsx";
import { Tours } from "./pages/Tours.jsx";


function App() {
 
  // const location = useLocation();
  // const currentpath = location.pathname;

  const About = lazy(()=>{
    import ("./components/About.jsx");
  })

  return (
    <div className=" vh-100 vw-99">

      <Suspense fallback={<div>...Loading</div>} />

      <Routes>
        <Route path="/" element={<Layout></Layout>} >

          <Route path="/register" element={ <Unauthroute> <Register /> </Unauthroute>} />
          <Route path="/login" element={ <Unauthroute> <Login /> </Unauthroute> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/dashboard" element={ <Authroute> <Dashboard /> </Authroute> } />
          <Route path="/tours" element={ <Authroute> <Tours /> </Authroute> } />
          <Route path="/" element={ <Unauthroute> <Register /> </Unauthroute> } />

        </Route>
      </Routes>

    </div>
  );
}

export default App;

