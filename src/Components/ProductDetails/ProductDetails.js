import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useAuth from "../Hooks/useAuth";
import Loader from "../Loader/Loader";
function ProductDetails() {
  const { user } = useAuth();
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState();
  let params = useParams();
  console.log(params.productId, "params");
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
        if (e.response.status === 401 || e.response.status === 400) {
          console.log("error ");
        }
      })
      .finally(() => setLoader(false));
  }, []);

  const product = products?.find((product) => product._id === params.productId);

  return (
    <>
      {products?.length && (
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={product?.img}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product?.title}
                </h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    ⭐⭐⭐⭐
                    <span class="text-gray-600 ml-3">
                      {product?.rating} Reviews
                    </span>
                  </span>
                </div>
                <p class="leading-relaxed">{product?.description}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div class="flex ml-6 items-center">
                    <div class="relative"></div>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    Price: {product?.price} BDT.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {loader && <Loader />}
      {products?.length < 0 && <Loader />}
    </>
  );
}

export default ProductDetails;
