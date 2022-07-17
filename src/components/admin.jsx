import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [product, setProduct] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleCouponChange = (e) => {
    let name = e.target.name;
    let value = e.target.value; 

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  const saveCoupon = () => {
    let coupon2beSaved = { ...coupon };
    let discount = parseFloat(coupon2beSaved.discount);
    coupon2beSaved.discount = discount;

    console.log(coupon2beSaved);
    // todo: send obj to the server

    // add it to the state array
    let copyCoupons = [...allCoupons];    
    copyCoupons.push(coupon2beSaved);
    setAllCoupons(copyCoupons);
  };

  const handleProductChanged = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const saveProduct = () => {
    let copy={ ...product };
    copy.price=parseFloat(copy.price);
    console.log(copy);

    // todo: save prod on server

    // save prod on state array
    let copyAllProds=[...allProducts];
    copyAllProds.push(copy);
    setAllProducts(copyAllProds);
  };

  /**
   * git init
   * git remot add origin URL
   * 
   * git add .
   * git commit -m ""
   * git push
   * git push -u original master
   * 
   */

  return (
    <div className="admin-page">
      <h1>Store Administration</h1>

      <div className="parent">
        <section className="products">
          <h3>Products</h3>

          <div className="form">
            <div className="my-control">
              <label>Title</label>
              <input name="title" onChange={handleProductChanged} type="text" />
            </div>

            <div className="my-control">
              <label>Price</label>
              <input
                name="price"
                onChange={handleProductChanged}
                type="number"
              />
            </div>

            <div className="my-control">
              <label>Category</label>
              <input
                name="category"
                onChange={handleProductChanged}
                type="text"
              />
            </div>

            <div className="my-control">
              <label>Image</label>
              <input
                name="image"
                placeholder="Image name like: prod1.jpg"
                onChange={handleProductChanged}
                type="text"
              />
            </div>

            <div className="my-control">
              <button onClick={saveProduct} className="btn btn-primary">
                Save Product
              </button>
            </div>
          </div>
            
          <div className="produts-list">
            <ul>
              {allProducts.map((prod, index) => <li key={index}>{prod.title}-${prod.price}</li>)}
            </ul>
          </div>
        </section>

        <section className="coupons">
          <h3>Coupon Codes</h3>

          <div className="form">
            <div className="my-form">
              <label>Code</label>
              <input name="code" onChange={handleCouponChange} type="text" />
            </div>

            <div className="my-control">
              <label>Discount</label>
              <input name="discount" onChange={handleCouponChange} type="number" />
            </div>

            <div className="my-control">
              <button onClick={saveCoupon} className="btn btn-primary">
                Save Coupon
              </button>
            </div>
          </div>

          <div className="coupons-list">
            <ul>
              {allCoupons.map((coupon, index) => <li key={index}>{coupon.code} - {coupon.discount}% off</li> )}
            </ul>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Admin;

// <ul>
// {allCoupons.map(coupon => <li>{coupon.code} - {coupon.discount}% off</li> )}
// </ul>

// {/* Display here your coupons like] */}
