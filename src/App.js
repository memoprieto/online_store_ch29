//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import About from './components/about';
import Home from './components/home';
import Cart from './components/cart';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

        {/*footer here*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
