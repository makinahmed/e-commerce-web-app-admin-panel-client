import React from "react";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import SingleCart from "./SingleCart";
import SubTotal from "./SubTotal";
function Cart({ cartProducts, setCartProduct }) {
  return (
    <div>
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div class="h-screen pt-20 sm:flex ">
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 flex-wrap">
          {cartProducts.length === 0 && <EmptyCart />}
          {cartProducts.length > 0 &&
            cartProducts?.map((product) => (
              <SingleCart
                setCartProduct={setCartProduct}
                cartProducts={cartProducts}
                product={product}
              />
            ))}
        </div>
        <SubTotal setCartProduct={setCartProduct} cartProducts={cartProducts} />
      </div>
    </div>
  );
}

export default Cart;




/*




<div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col gap-1">
          <div className=" flex p-4 justify-between md:border-b items-center	">
            <p>Title </p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <SingleCart />
          <SingleCart />
          <SingleCart />
        </div>
      </div>
      <button className="btn btn-success flex ">Delete parmanently</button>
    </div>




*/