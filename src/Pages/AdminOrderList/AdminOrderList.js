import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";
import SingleOrder from "./SingleOrder";

function AdminOrderList() {
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

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>order ID</th>
            <th>product Name</th>
            <th>Delivery Status</th>
            <th>customer Address</th>
            <th>Last Date of Delivery</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {ordersList?.map((order, index) => (
            <SingleOrder key={order?._id} order={order} number={index} />
          ))}
        </tbody>
      </table>
      {loader && <Loader />}
    </div>
  );
}

export default AdminOrderList;


