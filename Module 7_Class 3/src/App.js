//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <h1>Welcome to Organika!</h1>

        <Footer></Footer>
        <Catalog></Catalog>
    </div>
  );
}

export default App;
