import {useContext} from 'react';
import StoreContext from '../context/storeContext';

import './cart.css';
import ProductInCart from './productInCart';



const Cart=()=> {
    const cart=useContext(StoreContext).cart;

    const getCount = () => {
        let count=0;
        for (let i=0; i < cart.length; i++) {
            count += cart[i].quantity;
        }

        return count;
    };

    const getTotal = () => {
        let total=0;
        for (let i=0; i< cart.length; i++){
            let prod=cart[i];
            total += prod.price *prod.quantity;
        }

        return total.toFixed(2);
    }
    
    return (
        <div className="cart-page">
            <h1>Ready to pay for these amazing item?</h1>
            <h5>There are {getCount()} products on your cart</h5>

            <div classname="parent">
                <section className="list">
                    {cart.map((prod) =>
                        <ProductInCart key={prod.id} data={prod}></ProductInCart>
                    )}
                </section>

                <section className="info">
                    <h5>Total to pay</h5>
                    <h3>${getTotal()}</h3>
                </section>
            </div>
            
        </div>
    );
};

export default Cart;