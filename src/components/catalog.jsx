import {useEffect, useState} from 'react';
import "./catalog.css";  /// Lo tenia como comentario    loadCatalog fetchCatalog
import Product from "./product";
import DataService from "./services/dataService";

const Catalog = () => {
    let [products, setProducts]=useState([]);

    const loadCatalog =() => {
        // get products
        let service=new DataService();
        let prods=service.getCatalog();
        setProducts(prods);
    };
    
    useEffect(()=>{
        loadCatalog();
    }, []);

    return (
        <div className="catalog">
           <h2>This is our Amazing Catalog!!</h2>
           <h3>We have {products.length} products!</h3>

           <div className="products-container">
           {products.map((prod)=> (
            <Product key={prod.id} data={prod}></Product>
            ))}
           </div>
        </div>
    );
};

export default Catalog;