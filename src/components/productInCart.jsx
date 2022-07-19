import './productInCart.css';
import { useContext} from 'react';
import StoreContext from '../context/storeContext';

const ProductInCart = (props) => {

const getTotal=() => {
    let total=props.data.price * props.data.quantity;
    return total.toFixed(2);
};

const handleRemove = () => {
    removeProduct(props.data.id);
}

    return (
      <div className="product-cart">
        <img src={'/img/'+ props.data.image} alt=""/>
        <div classname='info'>
        <h5>{props.data.title}</h5>
        <p>{props.data.category}</p>
      </div>

      <div className='price'>
        <label classname='col-head'>Price</label>
        <label>${props.data.price}</label>
      </div>

      <div className='quantity'>
        <label classname='col-head'>Quantity</label>
        <label>${props.data.quantity}</label>
      </div>

      <div className='total'>
        <label classname='col-head'>Total</label>
        <label>{getTotal()}</label>
      </div>

        <button onCLick={handleRemove} classname="btn btn-sm btn-danger">Remove</button>
      </div>
    );
};

export default ProductInCart;