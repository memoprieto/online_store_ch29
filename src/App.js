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
          <Route patch="/" element={<Home/>} />
          <Route patch="/catalog" element={<Catalog/>} />
          <Route patch="/about" element={<About/>} />
          <Route patch="/cart" element={<Cart/>} />
        </Routes>

        {/*footer here*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
