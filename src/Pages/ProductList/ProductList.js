import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";
import SingleProducts from "../../Components/SingleProducts/SingleProducts";
function ProductList({ handleUpdateCart }) {
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState();
  const { user } = useAuth();

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://e-commerce-web-app-admin-panel-server-r9gv.vercel.app/products?email=${user?.email}`,
        config
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        if (e.response?.status === 401 || e.response?.status === 400) {
          console.log("Log in again ");
        }
      })
      .finally(() => setLoader(false));
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-center font-bold my-20 ">All Products</h2>
      <div className="justify-center overflow-x-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:ms-3">
        {products?.map((product) => (
          <SingleProducts
            key={product._id}
            product={product}
            handleUpdateCart={handleUpdateCart}
          />
        ))}
      </div>
      {loader && <Loader />}
    </div>
  );
}

export default ProductList;
