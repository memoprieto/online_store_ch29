import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [product, setProduct] = useState({});

  const handleCouponChanged = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  const saveCoupon = () => {
    let copy = { ...coupon };
    let discount = parseFloat(copy.discount);
    copy.discount = discount;

    console.log(copy);
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
  };

  /**
   * git add .
   * git commit -m ""
   * git push
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
        </section>

        <section className="coupons">
          <h3>Coupon Codes</h3>

          <div className="form">
            <div className="my-form">
              <label>Code</label>
              <input name="code" onChange={handleCouponChanged} type="text" />
            </div>

            <div className="my-control">
              <label>Discount</label>
              <input
                name="discount"
                onChange={handleCouponChanged}
                type="number"
              />
            </div>

            <div className="my-control">
              <button onClick={saveCoupon} className="btn btn-primary">
                Save Coupon
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
