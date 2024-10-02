import React from "react";
import ReactDOM from "react-dom/client";
import "./components/index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home";
import ShopLashes from "./Pages/ShopLashes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";
import { BrowserRouter, Switch, Route, } from "react-router-dom";


 function App() {
    return (
        <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/shopLashes" exact component={ShopLashes} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/layout" exact component={Layout} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </div>
    );
  }

 

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    
  <App></App>
  
);

