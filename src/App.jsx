import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import {Routes,Route} from "react-router-dom"
const App = () =>{
    return (
        <div>
            <Navbar/>
            <div className="container">
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/product" element= {<Product/>}/>
                <Route path="/about" element= {<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </div>
        </div>
    )
}

export default App;
