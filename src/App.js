//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import About from './components/about';
import Home from './components/home';
import Cart from './components/cart';
import Admin from './components/admin';
import Todo from "./components/todo";

import 'bootstrap/dist/css/bootstrap.min.css'; // Agregado
import 'bootstrap/dist/js/bootstrap.min.js';   // Agregado

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
          <Route path="/admin" element={<Admin/>} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>

        {/*footer here*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
