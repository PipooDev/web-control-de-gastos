import React from "react";
import TableRow from "./TableRow";

const OrdersTable = () => {
  const orders = [
    {
      productName: "JavaScript Tutorial",
      productNumber: "85743",
      paymentStatus: "Due",
      status: "Pending",
    },
    {
      productName: "CSS Full Course",
      productNumber: "97245",
      paymentStatus: "Refunded",
      status: "Declined",
    },
    {
      productName: "Flex-Box Tutorial",
      productNumber: "36452",
      paymentStatus: "Paid",
      status: "Active",
    },
    {
      productName: "Flex-Box Tutorial",
      productNumber: "36452",
      paymentStatus: "Paid",
      status: "Active",
    },
  ];

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.productNumber} order={order} />
          ))}
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  );
};

export default OrdersTable;
