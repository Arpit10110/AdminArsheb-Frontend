import React from "react";
import Navbar from "../Components/Navbar.jsx"
import OrderNav from "../Components/OrderNav.jsx"
import CompleteOrders from "../Components/CompleteOrders.jsx"
const CompletedOrder = () => {
  return (
    <>
      <Navbar />
      <OrderNav />
      <CompleteOrders/>
    </>
  );
};

export default CompletedOrder;
