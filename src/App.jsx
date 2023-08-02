import "./App.css";
import React, { Suspense,lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
// import Home from "./Home";
import About from "./About";
import Singlepage from "./Singlepage";
import Appprovider from "./Context";
import Cart from './Cart'
import Login from "./Login";
import Signup from "./Signup";
import Contact from "./Contact";
import Notfound from "./Notfound";
const Home =lazy(()=>import ("./Home") )


function App() {
  // console.log(JSON.parse(localStorage.getItem("cartvalue")),'value')
  return (
    <>
       <Appprovider>
      <BrowserRouter>
        <Navbar />
          <Suspense fallback={<div>Loading...</div>}/>  
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route  path="category/"  element={<Home/>}></Route>
          <Route path='/category/:categoryparams'element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path={`/singlepage/:id`} element={<Singlepage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Appprovider>
    </>
  );
}

export default App;
