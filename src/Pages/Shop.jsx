import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <div>
        <section className="shop_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>Latest Products</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <Link to="product">
                    <div className="img-box">
                      <img src="images/p1.png" alt="nice" />
                    </div>
                    <div className="detail-box">
                      <h6>Ring</h6>
                      <h6>
                        Price
                        <span>₹200</span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <Link >View All Products</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
