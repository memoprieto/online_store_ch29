import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return (
        <div className="product">
            <img src="https://www.greenqueen.com.hk/wp-content/uploads/2019/08/79DDB337-9104-4282-A9E7-48846087A304.jpeg" alt="" />
            <h2>Title</h2>
            <label>Price: $300.00 </label>
            <label>Total: $200.00 </label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary">Add</button>
        </div>
    );
}

export default Product;