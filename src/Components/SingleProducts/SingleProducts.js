import React, { useState } from "react";
import { Link } from "react-router-dom";


function SingleProducts({ product, handleUpdateCart }) {

  const { _id, title, img, stock, price, description, rating } = product;
  const handleClick = () => {
    handleUpdateCart(product);
  };
  return (
    <div
      style={{ maxWidth: "18rem", maxHeight: "30rem" }}
      className="card card-compact w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={img}
          className="overflow-hidden w-full h-full"
          alt="product"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 200)}..</p>
        <div className="card-actions justify-between">
          <button onClick={handleClick} className="btn btn-primary">
            Add To Cart
          </button>
          <Link to={`${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleProducts;
