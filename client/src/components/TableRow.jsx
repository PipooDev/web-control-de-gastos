import React from 'react';

const TableRow = ({ order }) => {
  return (
    <tr>
      <td>{order.productName}</td>
      <td>{order.productNumber}</td>
      <td>{order.paymentStatus}</td>
      <td className={`${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}`}>{order.status}</td>
      <td className="primary">Details</td>
    </tr>
  );
};

export default TableRow;