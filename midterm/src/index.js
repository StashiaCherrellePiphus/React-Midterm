import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Creator from './Pages/Creator';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="creator" element={<Creator />} />
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


