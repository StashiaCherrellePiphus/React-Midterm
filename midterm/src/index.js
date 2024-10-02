import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Home from './Pages/Home';
import ShopLashes from './Pages/ShopLashes';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


 export default function App() {
    return (
        <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element ={Layout} />
            <Route index element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/shoplashes" element={<ShopLashes></ShopLashes>} />
            </Routes>
          </BrowserRouter>
        </div>
    );
  }

 

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    
  <App></App>
  
);

