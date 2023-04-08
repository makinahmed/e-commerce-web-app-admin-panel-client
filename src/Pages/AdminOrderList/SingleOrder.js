import React from "react";
import { Link } from "react-router-dom";

function SingleOrder({order,number}) {
console.log(order)
  return (
    <tr>
      <th>{number + 1}</th>
      <td>{order?.orderID}</td>
      <td>{order?.productName}</td>
      <td className={`${!order?.isShifted && "text-error"}`}>{order?.isShifted.toString()}</td>
      <td>{order?.customerAddress}</td>
      <td>{order?.date}</td>
      <td>
        <Link to={order?._id} className="btn">Details</Link>
      </td>
    </tr>
  );
}

export default SingleOrder;


/*





 orderID,
        customer name
        customer address
        product name
        product details
        customer details
        customer mobile
        customer payment
        product quantity
        delivery charge
        isShifted
        orderType
        isPaid*/