import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    //console.log(props)
    return (
        <div className="product">
            <img src={"/img/"+props.data.image} alt="" />
            <h2>{props.data.title}</h2>
            <label>${props.data.price}</label>
            <label>Total: $200.00 </label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary btn-sm">Add</button>
        </div>
    );
}

export default Product;


//<img src="https://www.greenqueen.com.hk/wp-content/uploads/2019/08/79DDB337-9104-4282-A9E7-48846087A304.jpeg" alt="" />