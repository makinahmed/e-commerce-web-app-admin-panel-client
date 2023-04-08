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
//product-list/:productId
/*



import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import cow from "../../assest/cow.jpg";

export const CartContext = createContext(0);
function SingleProducts({ product }) {
  const { title, description, id } = product;
  const [cartProducts, setCartProduct] = useState([]);
  const handleClick = (currentProduct) => {
  const newCart = [...cartProducts, currentProduct];
    // setCartProduct(newCart);
  console.log(currentProduct, "currentProduct");
  };


  return (
    <CartContext.Provider value={cartProducts}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={cow} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <button onClick={()=>handleClick(product)} className="btn btn-primary">
              Add To Cart
            </button>
            <Link to={`${id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}
//product-list/:productId
export default SingleProducts;






*/
