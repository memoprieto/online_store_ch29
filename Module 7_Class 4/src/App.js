//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import About from './components/about';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <h1>Welcome to Organika!</h1>

        <Catalog></Catalog>
        <Footer></Footer>
        <About></About>
    </div>
  );
}

export default App;
