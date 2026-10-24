import React from 'react';

const Order = ({ id, status = "pending" }) => {
  return (
    <div>
      <p>Order #{id}: Status is {status}</p>
    </div>
  );
};

export default Order;