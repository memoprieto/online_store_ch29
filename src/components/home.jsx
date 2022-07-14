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