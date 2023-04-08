import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";

function OrderDetails() {
  const { orderId } = useParams();
  const [loader, setLoader] = useState(false);
  const [ordersList, setOrderList] = useState();
  const { user } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://e-commerce-web-app-admin-panel-server-r9gv.vercel.app/orderlist?email=${user?.email}`,
        config
      )
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((e) => {
        if (e.response.status === 401 || e.response.status === 400) {
          console.log("error ");
        }
      })
      .finally(() => setLoader(false));
  }, []);

  const order = ordersList?.find((order) => order._id === orderId);

  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {order?.customerName}
              </h1>
              <div class="flex mb-4  my-1">
                <span class="flex items-center">
                  <span>{order?.customerAddress}</span>
                </span>
              </div>
              <p class="leading-relaxed font-bold">{order?.productName}</p>

              <p class="leading-relaxed">{order?.productDetails}</p>
              <span class="text-gray-600">
                Payment : {order?.isPaid && "Done"}
                {!order?.isPaid && "NO"}
              </span>
              <p class="leading-relaxed my-1">
                Mobile Number: {order?.customerMobile}
              </p>
              <p class="leading-relaxed text-error">
                Last Date of delivery: {order?.date}
              </p>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  Quantity: {order?.productQuantity} Pcs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loader && <Loader />}
      {ordersList?.length < 0 && <Loader />}
    </div>
  );
}

export default OrderDetails;
