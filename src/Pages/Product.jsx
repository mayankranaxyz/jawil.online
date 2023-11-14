import React from "react";

const Product = () => {
  return (
    <div>
      <div className="product-detail">
        <h1 id="product-name">Product Name</h1>
        <img id="product-image" src="product.jpg" alt="Product" />
        <p id="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero eget lectus convallis consectetur.
        </p>
        <p id="product-price">$99.99</p>
      </div>
    </div>
  );
};

export default Product;