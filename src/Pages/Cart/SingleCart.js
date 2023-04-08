import React from "react";
import "./singleCart.css";

function SingleCart({ product, setCartProduct, cartProducts }) {
  const { title, img, stock, description, price, rating } = product;

  const removeProduct = () => {
    const newCart = cartProducts.filter(item => item?._id !== product?._id);
    setCartProduct([...newCart])
  };

  return (
    <div class="rounded-lg md:w-2/4">
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img class="w-full rounded-lg sm:w-40 h-32" src={img} alt="" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{title}</h2>
            <p class="mt-1 text-xs text-gray-500 font-bold">Stock: {stock}</p>
            <p class="text-sm mt-4 font-bold">Price: 259.000 BDT.</p>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div onClick={removeProduct} class="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCart;
