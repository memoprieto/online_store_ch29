import {useEffect, useState} from 'react';
import "./catalog.css";  /// Lo tenia como comentario
import Product from "./product";
import DataService from "./services/dataService";

const Catalog = () => {
    let [products, setProducts]=useState([]);

    const loadCatalog =() => {
        let service=new DataService();
        let data=service.getCatalog();
        setProducts(data);
    }
    
    useEffect(()=>{
        loadCatalog();
    },[]);

    return (
        <div className="catalog">
           <h2>This is our Amazing Catalog!!</h2>
           <h3>We have {products.length} products!</h3>
           {
                products.map((prod)=>
                (<Product key={prod.id} data={prod}></Product>))
            }
        </div>
    );
}

export default Catalog;

//<Product title="Test A" price="10.50"></Product>
//<Product title="Test B" price="10.40"></Product>
//<Product title="Test C" price="10.30"></Product>
//<Product title="Test D" price="10.20"></Product>

//<Product key={prod.id} data={prod}></Product>