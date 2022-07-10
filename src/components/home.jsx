import {Link} from 'react-router-dom';

const Home=()=>{
  return (
    <div className="home-page">
      <h1>Fresh food always</h1>
      <Link className="btn-primary" to="/catalog">
        Check our amazing catalog!
      </Link>
    </div>
  );
};

export default Home;

/*

    -create Cart pag
    -display a simple h1 for now
    -use the search button to navigate to it (text should be: View cart)
    -remove the search box from the navBar

*/