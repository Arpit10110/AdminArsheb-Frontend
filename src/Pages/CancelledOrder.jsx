import React from 'react'
import Navbar from "../Components/Navbar.jsx"
import OrderNav from "../Components/OrderNav.jsx"
import CancelledOrders from "../Components/CancelledOrders.jsx"
const CancelledOrder = () => {
  return (
    <>
    <Navbar />
    <OrderNav />
    <CancelledOrders/>
  </>
  )
}

export default CancelledOrder