import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useState, useContext } from "react";
import StoreContext from './../context/storeContext';

const Product = (props) => {
    //console.log(props)
   let [quantity, setQuantity]= useState(1);
   let globalAddProd=useContext(StoreContext).addProduct;

    const quantityChange=(val)=>{
        //console.log('Quantity Changed', val);
        setQuantity(val);
    };

    const getTotal=()=>{
        let total=props.data.price*quantity;
        return total.toFixed(2);
    };

    const handleAdd = () => {
        let prod4Cart = {...props.data, quantity };
        
        globalAddProd(prod4Cart); // call the global fn 
    };


    return (
        <div className="product">
            <img src={'/img/' + props.data.image} alt="" />
            <h2>{props.data.title}</h2>
            <label>Price: ${props.data.price.toFixed(2)}</label>
            <label>Total: ${getTotal()}</label>
            <QuantityPicker onChange={quantityChange}></QuantityPicker>
            <button onClick={handleAdd} className="btn btn-primary btn-sm">
              Add
            </button>
        </div>
    );
};

export default Product;


//<img src="https://www.greenqueen.com.hk/wp-content/uploads/2019/08/79DDB337-9104-4282-A9E7-48846087A304.jpeg" alt="" />