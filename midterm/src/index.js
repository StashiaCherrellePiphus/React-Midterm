import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Creator from './Pages/Creator';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../Pages/Navbar.js';
import './App.css';


 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="creator" element={<Creator />} />
       <Route path="navbar.js" element={<Navbar.js />} />
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


