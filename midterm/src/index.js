import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Creator from './Pages/Creator';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import ShopLashes from "../src/Pages/ShopLashes"


 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="creator" element={<Creator />} />
       <Route path="navbar.jsx" element={<Navbar.jsx />} />
       <Route path="navbar.css" element={<Navbar.css />} />
       <Route path="footer" element={<Footer />} />
       <Route path="shoplashes" element={<ShopLashes.jsx />} />
      </Route>
    </Routes>
    </BrowserRouter>
   );
  }

  export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


