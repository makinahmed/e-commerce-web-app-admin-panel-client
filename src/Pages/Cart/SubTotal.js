import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";

function SubTotal({ cartProducts, setCartProduct }) {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState();
  const { user } = useAuth();
  const handleCartProducts = () => {
    setCartProduct([]);
  };

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  let deleteProducts = { cartProducts };
  console.log(deleteProducts);
  const deleteParmanently = async () => {
    const response = await axios.delete(
      `https://e-commerce-web-app-admin-panel-server-r9gv.vercel.app/deleteproducts?email=${user?.email}`,
      {
        data: { cartProducts },
        ...config,
      }
    );
    setCartProduct([]);
    console.log(response, "response");
  };

  return (
    <div class="mt-6 h-48 px-4 rounded-lg border bg-white py-8 shadow-md md:mt-0 md:w-1/3">
      <div class="flex justify-around">
        <p class="text-lg font-bold">Total Products: </p>
        <p class="mb-1 text-lg font-bold">{cartProducts?.length}</p>
      </div>

      <hr class="my-4" />

      <button
        onClick={handleCartProducts}
        class="my-1 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
      >
        Delete All From Cart
      </button>
      <button
        onClick={deleteParmanently}
        class="w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
      >
        Delete All Parmanently
      </button>
    </div>
  );
}

export default SubTotal;
